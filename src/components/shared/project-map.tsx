"use client";

import * as React from "react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { MapPin } from "@/lib/map";

/**
 * Leaflet's bundled marker images break under bundlers that fingerprint
 * assets, so pins are built as divIcons — which also lets them carry brand
 * styling and an accent state.
 */
function buildIcon(accent: boolean) {
  const fill = accent ? "#F59E0B" : "#0F4C81";
  const ring = accent ? "rgba(245,158,11,.28)" : "rgba(15,76,129,.22)";

  return L.divIcon({
    className: "uss-pin",
    html: `
      <span style="position:relative;display:block;width:34px;height:34px;">
        <span style="position:absolute;inset:0;border-radius:9999px;background:${ring};transform:scale(1.5);"></span>
        <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:9999px;background:${fill};border:3px solid #fff;box-shadow:0 6px 16px -4px rgba(15,23,42,.5);">
          <span style="width:8px;height:8px;border-radius:9999px;background:#fff;"></span>
        </span>
      </span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -18],
  });
}

export function ProjectMap({
  pins,
  center = [23.8, 90.3],
  zoom = 7,
  className,
  height = "100%",
}: {
  pins: MapPin[];
  center?: [number, number];
  zoom?: number;
  className?: string;
  height?: string;
}) {
  const icons = React.useMemo(
    () => ({ default: buildIcon(false), accent: buildIcon(true) }),
    [],
  );

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      minZoom={5}
      scrollWheelZoom={false}
      zoomControl={false}
      worldCopyJump
      className={className}
      style={{ height, width: "100%" }}
      aria-label="Map of Universal Structural Steel project locations across Bangladesh"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />

      {pins.map((pin) => (
        <Marker
          key={pin.id}
          position={pin.coordinates}
          icon={pin.accent ? icons.accent : icons.default}
          title={pin.title}
        >
          <Popup>
            <div style={{ padding: "16px 18px" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-heading)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#64748B",
                }}
              >
                {pin.subtitle}
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-heading)",
                  fontSize: "15px",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  color: "#0F172A",
                }}
              >
                {pin.title}
              </p>
              {pin.meta ? (
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "12.5px",
                    color: "#334155",
                  }}
                >
                  {pin.meta}
                </p>
              ) : null}
              {pin.href ? (
                <Link
                  href={pin.href}
                  style={{
                    display: "inline-block",
                    marginTop: "12px",
                    fontFamily: "var(--font-heading)",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    color: "#0F4C81",
                  }}
                >
                  View project →
                </Link>
              ) : null}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
