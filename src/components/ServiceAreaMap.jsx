import { useEffect, useRef } from 'react';

/* ============================================================
   ServiceAreaMap — Leaflet island (client:load)
   Renders a styled map with the 5 Central Florida counties
   highlighted in Edison brand colors.
   Props:
     highlightedCounty — e.g. "Orange County" | null
       When set, that county brightens and all others dim.
   ============================================================ */

const STYLE_DEFAULT  = { fillColor: '#1B2A4A', fillOpacity: 0.14, color: '#3CC8C8', weight: 2.5, opacity: 1 };
const STYLE_ACTIVE   = { fillColor: '#3CC8C8', fillOpacity: 0.32, color: '#2BA8A8', weight: 3,   opacity: 1 };
const STYLE_DIMMED   = { fillColor: '#1B2A4A', fillOpacity: 0.06, color: '#3CC8C8', weight: 1.5, opacity: 0.4 };

export function ServiceAreaMap({ highlightedCounty = null }) {
  const containerRef = useRef(null);
  const mapRef       = useRef(null);
  const layersRef    = useRef({});   // { "Orange County": LeafletLayer, ... }

  /* ── Build map once, only when it nears the viewport ──────
     Leaflet JS/CSS + CARTO basemap tiles are heavy third-party
     requests. Deferring them until the map scrolls into view
     keeps them off the critical path (better LCP/Speed Index). */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    function build() {
    if (mapRef.current) return;

    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    function initMap() {
      const L = window.L;
      if (!L || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        center: [28.45, -81.25],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      fetch('/assets/service-area.geojson')
        .then(r => r.json())
        .then(data => {
          L.geoJSON(data, {
            style: () => ({ ...STYLE_DEFAULT }),
            onEachFeature(feature, lyr) {
              const name = feature.properties?.NAME || feature.properties?.name || '';
              layersRef.current[name] = lyr;

              // Direct map hover (independent of tag hover)
              lyr.on('mouseover', function () {
                this.setStyle({ ...STYLE_ACTIVE });
                this.bindTooltip(
                  `<strong style="font-family:var(--font-display,sans-serif);color:#1B2A4A">${name}</strong>`,
                  { sticky: true, className: 'edison-map-tip' }
                ).openTooltip();
              });
              lyr.on('mouseout', function () {
                // Restore to whatever the current highlight state dictates
                const current = highlightedCountyRef.current;
                if (!current) {
                  this.setStyle({ ...STYLE_DEFAULT });
                } else if (name === current) {
                  this.setStyle({ ...STYLE_ACTIVE });
                } else {
                  this.setStyle({ ...STYLE_DIMMED });
                }
                this.closeTooltip();
              });
            }
          }).addTo(map);

          map.fitBounds(
            L.geoJSON(data).getBounds(),
            { padding: [24, 24] }
          );
        })
        .catch(() => {});

      // City markers
      const cities = [
        { name: 'Orlando',           lat: 28.538, lng: -81.379 },
        { name: 'Winter Garden',     lat: 28.565, lng: -81.586 },
        { name: 'Kissimmee',         lat: 28.292, lng: -81.408 },
        { name: 'Clermont',          lat: 28.549, lng: -81.773 },
        { name: 'Lake Mary',         lat: 28.758, lng: -81.318 },
        { name: 'Altamonte Springs', lat: 28.661, lng: -81.365 },
        { name: 'Oviedo',            lat: 28.670, lng: -81.208 },
        { name: 'Brevard County',    lat: 28.300, lng: -80.720 },
      ];

      const dotIcon = L.divIcon({
        className: '',
        html: `<span style="display:block;width:10px;height:10px;background:#3CC8C8;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 4px rgba(15,29,51,.35)"></span>`,
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      });

      cities.forEach(c => {
        L.marker([c.lat, c.lng], { icon: dotIcon })
          .bindTooltip(
            `<span style="font-family:var(--font-display,sans-serif);font-weight:600;font-size:12px;color:#1B2A4A">${c.name}</span>`,
            { className: 'edison-map-tip', direction: 'top', offset: [0, -8] }
          )
          .addTo(map);
      });

      mapRef.current = map;
    }

    if (window.L) {
      initMap();
    } else if (!document.getElementById('leaflet-js')) {
      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      const poll = setInterval(() => {
        if (window.L) { clearInterval(poll); initMap(); }
      }, 50);
    }
    } // end build()

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); build(); }
    }, { rootMargin: '400px' });
    io.observe(containerRef.current);

    return () => {
      io.disconnect();
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  /* ── Keep a ref in sync so the mouseout handler can read it ─ */
  const highlightedCountyRef = useRef(highlightedCounty);
  useEffect(() => {
    highlightedCountyRef.current = highlightedCounty;
  }, [highlightedCounty]);

  /* ── React to tag hover: restyle all county layers ──────── */
  useEffect(() => {
    const layers = layersRef.current;
    if (!Object.keys(layers).length) return;

    if (!highlightedCounty) {
      // No tag hovered — reset all to default
      Object.values(layers).forEach(lyr => lyr.setStyle({ ...STYLE_DEFAULT }));
    } else {
      // Highlight matching county, dim the rest
      Object.entries(layers).forEach(([name, lyr]) => {
        lyr.setStyle(name === highlightedCounty ? { ...STYLE_ACTIVE } : { ...STYLE_DIMMED });
      });
    }
  }, [highlightedCounty]);

  return (
    <>
      <style>{`
        .edison-map-tip {
          background: #fff !important;
          border: 1px solid #E5E7EB !important;
          border-radius: 6px !important;
          box-shadow: 0 4px 12px rgba(15,29,51,.12) !important;
          padding: 4px 10px !important;
          font-family: var(--font-display, sans-serif) !important;
        }
        .edison-map-tip::before { display: none !important; }
        .leaflet-control-zoom a {
          color: #1B2A4A !important;
          font-size: 16px !important;
        }
        .leaflet-control-attribution {
          font-size: 10px !important;
          background: rgba(255,255,255,.75) !important;
        }
      `}</style>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </>
  );
}
