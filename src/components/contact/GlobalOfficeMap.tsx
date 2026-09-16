"use client";

import type { Office, OfficeId } from "./offices";

type GlobalOfficeMapProps = {
  offices: Office[];
  activeId: OfficeId | null;
  onSelect: (id: OfficeId) => void;
};

const MAP_WIDTH = 950;
const MAP_HEIGHT = 620;
const VIEW_HEIGHT = 500;

function arcPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  bend = 0.35,
): string {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * bend;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

function LocationPin({
  cx,
  cy,
  label,
  active,
  onSelect,
}: {
  cx: number;
  cy: number;
  label: string;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <g
      className="cursor-pointer outline-none"
      onMouseEnter={onSelect}
      onFocus={onSelect}
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-label={`${label} office`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
    >
      <circle
        cx={cx}
        cy={cy}
        r={active ? 36 : 24}
        fill="url(#marker-glow)"
        className="transition-all duration-500"
      />
      <circle
        cx={cx}
        cy={cy}
        r={active ? 6 : 4.5}
        fill="#DAB875"
        filter="url(#pin-glow)"
        className="transition-all duration-500"
      />
      <path
        d={`M${cx} ${cy - 16} C${cx - 6} ${cy - 7} ${cx - 6} ${cy + 2} ${cx} ${cy + 9} C${cx + 6} ${cy + 2} ${cx + 6} ${cy - 7} ${cx} ${cy - 16} Z`}
        fill={active ? "#E8C98E" : "#DAB875"}
        className="transition-all duration-500"
      />
      <text
        x={cx}
        y={cy + 32}
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize={active ? 13 : 11}
        fontFamily="var(--font-dm-sans), sans-serif"
        fontWeight={active ? 600 : 500}
        opacity={active ? 1 : 0.88}
        className="transition-all duration-500"
      >
        {label}
      </text>
    </g>
  );
}

export default function GlobalOfficeMap({
  offices,
  activeId,
  onSelect,
}: GlobalOfficeMapProps) {
  const canada = offices.find((o) => o.id === "canada");
  const usa = offices.find((o) => o.id === "usa");
  const india = offices.find((o) => o.id === "india");

  const point = (office: Office) => ({
    x: (office.mapX / 100) * MAP_WIDTH,
    y: (office.mapY / 100) * MAP_HEIGHT,
  });

  const arcs =
    canada && usa && india
      ? [
          { from: point(canada), to: point(usa), bend: 0.15 },
          { from: point(usa), to: point(india), bend: 0.38 },
          { from: point(canada), to: point(india), bend: 0.48 },
        ]
      : [];

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-[#00022E] shadow-[0_24px_60px_rgba(0,2,46,0.28)]"
      role="img"
      aria-label="Seva Kendra global office locations in Canada, USA and India"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(77,184,216,0.12),transparent_58%)]"
      />

      <svg
        viewBox={`0 0 ${MAP_WIDTH} ${VIEW_HEIGHT}`}
        className="relative aspect-[950/500] h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="marker-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DAB875" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#DAB875" stopOpacity="0" />
          </radialGradient>
          <filter id="pin-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <image
          href="/world-map-base.svg"
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          preserveAspectRatio="xMidYMid meet"
        />

        <g
          fill="none"
          stroke="#DAB875"
          strokeWidth="1.4"
          strokeDasharray="6 8"
        >
          {arcs.map((arc, index) => {
            const activePoint = activeId
              ? point(offices.find((o) => o.id === activeId)!)
              : null;
            const isConnected =
              activePoint &&
              ((arc.from.x === activePoint.x && arc.from.y === activePoint.y) ||
                (arc.to.x === activePoint.x && arc.to.y === activePoint.y));

            return (
              <path
                key={index}
                d={arcPath(arc.from.x, arc.from.y, arc.to.x, arc.to.y, arc.bend)}
                className="transition-opacity duration-500"
                opacity={isConnected ? 0.95 : activeId ? 0.25 : 0.5}
              />
            );
          })}
        </g>

        {offices.map((office) => {
          const { x, y } = point(office);
          return (
            <LocationPin
              key={office.id}
              cx={x}
              cy={y}
              label={office.country}
              active={activeId === office.id}
              onSelect={() => onSelect(office.id)}
            />
          );
        })}
      </svg>
    </div>
  );
}
