"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function createStateIcon(name: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="display:flex;align-items:center;gap:8px;white-space:nowrap;">
        <div style="width:12px;height:12px;flex-shrink:0;background:#4caf1a;border-radius:50%;border:2px solid #fff;box-shadow:0 0 10px rgba(76,175,26,0.8),0 0 20px rgba(76,175,26,0.4)"></div>
        <span style="color:#fff;font-family:sans-serif;font-weight:700;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;text-shadow:0 1px 4px rgba(0,0,0,0.9),0 0 8px rgba(0,0,0,0.9)">${name}</span>
      </div>`,
    iconSize: [160, 20],
    iconAnchor: [6, 10],
  });
}

const states = [
  { name: "Pernambuco", lat: -8.4, lng: -37.2 },
  { name: "Paraíba",    lat: -7.1, lng: -36.6 },
  { name: "Alagoas",    lat: -9.6, lng: -37.0 },
];

export default function AreaMap() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
  }, []);

  return (
    <MapContainer
      center={[-8.5, -36.8]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "420px", borderRadius: "16px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {states.map((s) => (
        <Marker key={s.name} position={[s.lat, s.lng]} icon={createStateIcon(s.name)} />
      ))}
    </MapContainer>
  );
}
