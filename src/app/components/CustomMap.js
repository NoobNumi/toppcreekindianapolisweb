"use client"; // Ensure this runs only on the client side

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Dynamically import react-leaflet components (SSR disabled)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);

// Ensure Leaflet (`L`) is only imported in the browser
export default function CustomMap() {
  const [leaflet, setLeaflet] = useState(null);
  const [heartIcon, setHeartIcon] = useState(null);
  const center = [39.8463, -86.2837]; // Location in Indianapolis

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        setLeaflet(L);

        // Define heart icon after Leaflet is loaded
        const newIcon = new L.DivIcon({
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
          iconSize: [52, 52],
          iconAnchor: [26, 26],
        });

        setHeartIcon(newIcon);
      });
    }
  }, []);

  if (!leaflet || !heartIcon) {
    return (
      <div className="h-[250px] w-[500px] bg-gray-200 animate-pulse rounded-lg" />
    );
  }

  return (
    <div className="w-full md:max-w-[500px] max-w-full h-full max-h-[700px]">
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Circle
          center={center}
          radius={1000}
          color="#7b7b89"
          fillColor="#7b7b89"
          fillOpacity={0.3}
        />
        <Marker position={center} icon={heartIcon} />
      </MapContainer>
    </div>
  );
}
