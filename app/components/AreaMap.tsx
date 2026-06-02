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
  fillColor: "#1e6b0a",
  fillOpacity: 0.75,
  color: "#5dbe2a",
  weight: 2,
  opacity: 1,
};

function createLabelIcon(name: string) {
  return L.divIcon({
    className: "",
    html: `<span style="
      color:#fff;
      font-weight:900;
      font-size:15px;
      letter-spacing:0.12em;
      text-transform:uppercase;
      white-space:nowrap;
      text-shadow:0 1px 4px rgba(0,0,0,1),0 0 10px rgba(0,0,0,1);
      pointer-events:none;
    ">${name}</span>`,
    iconSize: [160, 20],
    iconAnchor: [80, 10],
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
      bounds={[[-11.5, -43.5], [-4.5, -34.0]]}
      boundsOptions={{ padding: [16, 16] }}
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
