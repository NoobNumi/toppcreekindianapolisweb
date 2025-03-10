"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  DivIcon,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom Heart Icon with Background
const heartIcon = new L.DivIcon({
  className: "custom-heart-icon",
  html: `
    <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      background-color: #0097B2;
      border-radius: 50%; 
      width: 52px; 
      height: 52px; 
      padding: 8px;
    ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="white" width="32" height="32">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
    </div>
  `,
  iconSize: [52, 52], // Keep it consistent
  iconAnchor: [26, 26], // Centered
});

// Rolling Hills Dr, Indianapolis (Approximate)
const center = [39.8463, -86.2837];

export default function CustomMap() {
  const heartIcon = new L.DivIcon({
    className: "custom-heart-icon",
    html: `
      <div style="display: flex; justify-content: center; align-items: center; background-color: #0097B2; border-radius: 50%; width: 52px; height: 52px; padding: 8px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke="white" width="32" height="32">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  return (
    <div className="w-full md:max-w-[500px] max-w-full h-full max-h-[700px]">
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Circle highlighting the area */}
        <Circle
          center={center}
          radius={1000}
          color="#7b7b89"
          fillColor="#7b7b89"
          fillOpacity={0.3}
        />

        {/* Heart Icon in the center */}
        <Marker position={center} icon={heartIcon} />
      </MapContainer>
    </div>
  );
}
