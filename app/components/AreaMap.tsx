"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const STATE_CODES = [
  { code: 26, name: "Pernambuco", lat: -8.38, lng: -37.8 },
  { code: 25, name: "Paraíba",    lat: -7.12, lng: -36.7 },
  { code: 27, name: "Alagoas",    lat: -9.57, lng: -36.6 },
];

const highlightStyle: L.PathOptions = {
  fillColor: "#4caf1a",
  fillOpacity: 0.25,
  color: "#4caf1a",
  weight: 2,
  opacity: 0.9,
};

function createLabelIcon(name: string) {
  return L.divIcon({
    className: "",
    html: `<span style="
      color:#fff;
      font-weight:800;
      font-size:13px;
      letter-spacing:0.10em;
      text-transform:uppercase;
      white-space:nowrap;
      text-shadow:0 1px 3px rgba(0,0,0,1),0 0 8px rgba(0,0,0,0.9);
      pointer-events:none;
    ">${name}</span>`,
    iconSize: [140, 18],
    iconAnchor: [70, 9],
  });
}

export default function AreaMap() {
  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection[]>([]);

  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;

    Promise.all(
      STATE_CODES.map(({ code }) =>
        fetch(
          `https://servicodados.ibge.gov.br/api/v2/malhas/${code}?formato=application/vnd.geo+json`
        ).then((r) => r.json())
      )
    ).then(setGeoData);
  }, []);

  return (
    <MapContainer
      bounds={[[-10.7, -41.5], [-5.8, -34.8]]}
      boundsOptions={{ padding: [24, 24] }}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      style={{ width: "100%", height: "420px", borderRadius: "16px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {geoData.map((data, i) => (
        <GeoJSON
          key={STATE_CODES[i].code}
          data={data}
          style={highlightStyle}
        />
      ))}
      {STATE_CODES.map((s) => (
        <Marker
          key={`label-${s.code}`}
          position={[s.lat, s.lng]}
          icon={createLabelIcon(s.name)}
        />
      ))}
    </MapContainer>
  );
}
