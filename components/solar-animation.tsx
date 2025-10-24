"use client";

import { useState, useRef, useEffect } from "react";

export function SolarAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [sunPosition, setSunPosition] = useState({ x: 600, y: 400 });

  const largeCircleCenter = { x: 450, y: 567 };
  const largeCircleRadius = 225;
  const smallCircleCenter = { x: 450, y: 400 };
  const smallCircleRadius = 150;
  const buildingPosition = { x: 450, y: 450 };
  const buildingSize = { width: 80, height: 120 };

  const constrainToPath = (clientX: number, clientY: number) => {
    if (!svgRef.current) return sunPosition;

    const svgRect = svgRef.current.getBoundingClientRect();
    const svgX = ((clientX - svgRect.left) / svgRect.width) * 900;
    const svgY = ((clientY - svgRect.top) / svgRect.height) * 800;

    const dx = svgX - largeCircleCenter.x;
    const dy = svgY - largeCircleCenter.y;
    let angle = Math.atan2(dy, dx);

    const d = Math.sqrt(
      Math.pow(largeCircleCenter.x - smallCircleCenter.x, 2) +
        Math.pow(largeCircleCenter.y - smallCircleCenter.y, 2)
    );

    const a = Math.acos(
      (d * d +
        largeCircleRadius * largeCircleRadius -
        smallCircleRadius * smallCircleRadius) /
        (2 * d * largeCircleRadius)
    );

    const centerAngle = Math.atan2(
      smallCircleCenter.y - largeCircleCenter.y,
      smallCircleCenter.x - largeCircleCenter.x
    );

    const minAngle = centerAngle - a;
    const maxAngle = centerAngle + a;

    if (angle > maxAngle && angle < Math.PI) {
      angle = maxAngle;
    } else if (angle < minAngle && angle > -Math.PI) {
      angle = minAngle;
    }

    const constrainedX =
      largeCircleCenter.x + Math.cos(angle) * largeCircleRadius;
    const constrainedY =
      largeCircleCenter.y + Math.sin(angle) * largeCircleRadius;

    return { x: constrainedX, y: constrainedY };
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const newPosition = constrainToPath(e.clientX, e.clientY);
    setSunPosition(newPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const newPosition = constrainToPath(touch.clientX, touch.clientY);
    setSunPosition(newPosition);
  };

  const calculateShadow = () => {
    const dx = sunPosition.x - buildingPosition.x;
    const dy = sunPosition.y - buildingPosition.y;
    const angle = Math.atan2(dy, dx);

    const shadowLength = 150 * (1 - Math.abs(Math.sin(angle)));
    const shadowAngle = angle + Math.PI;

    const shadowEndX =
      buildingPosition.x + Math.cos(shadowAngle) * shadowLength;
    const shadowEndY =
      buildingPosition.y + Math.sin(shadowAngle) * shadowLength;

    return {
      x1: buildingPosition.x - buildingSize.width / 2,
      y1: buildingPosition.y + buildingSize.height / 2,
      x2: buildingPosition.x + buildingSize.width / 2,
      y2: buildingPosition.y + buildingSize.height / 2,
      x3: shadowEndX + buildingSize.width / 2,
      y3: shadowEndY,
      x4: shadowEndX - buildingSize.width / 2,
      y4: shadowEndY,
    };
  };

  const calculateLightIntensity = () => {
    const dx = sunPosition.x - smallCircleCenter.x;
    const dy = sunPosition.y - smallCircleCenter.y;
    const angle = Math.atan2(dy, dx);

    const normalizedAngle = ((angle + Math.PI) % (2 * Math.PI)) / (2 * Math.PI);
    const intensity = 0.3 + 0.7 * (1 - Math.abs(normalizedAngle - 0.5) * 2);

    return intensity;
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const shadow = calculateShadow();
  const lightIntensity = calculateLightIntensity();

  return (
    <div className="w-full min-h-dvh flex items-center justify-center relative">
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${
            (sunPosition.x / 900) * 100
          }% ${(sunPosition.y / 800) * 100}%, 
            rgba(255, 204, 0, ${lightIntensity * 0.15}) 0%, 
            rgba(255, 204, 0, ${lightIntensity * 0.08}) 30%, 
            rgba(0, 0, 0, ${0.4 - lightIntensity * 0.3}) 70%,
            rgba(0, 0, 0, 0.5) 100%)`,
        }}
      />
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 900 800"
        className="absolute max-w-full max-h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="circleMask">
            <rect width="900" height="800" fill="black" />
            <circle cx="450" cy="400" r="150" fill="white" />
          </mask>
          <filter id="shadowBlur">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <line
          x1="450"
          y1="200"
          x2="450"
          y2="600"
          stroke="white"
          strokeWidth="2"
        />
        <line
          x1="250"
          y1="400"
          x2="650"
          y2="400"
          stroke="white"
          strokeWidth="2"
        />

        <circle
          cx="450"
          cy="400"
          r="150"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />

        <circle
          cx="450"
          cy="567"
          r="225"
          fill="none"
          stroke="white"
          strokeWidth="3"
          mask="url(#circleMask)"
        />

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="white" />
          </marker>
        </defs>

        <g>
          <line
            x1="450"
            y1="140"
            x2="450"
            y2="80"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="450"
            y="60"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            ATACADÃO
          </text>
          <text x="450" y="40" textAnchor="middle" fill="white" fontSize="10">
            N
          </text>
        </g>

        <g>
          <line
            x1="580"
            y1="230"
            x2="630"
            y2="180"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="670"
            y="170"
            textAnchor="start"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            ÁGUAS BELAS
          </text>
        </g>

        <g>
          <line
            x1="620"
            y1="400"
            x2="690"
            y2="400"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="730"
            y="395"
            textAnchor="start"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            AEROPORTO
          </text>
          <text
            x="730"
            y="410"
            textAnchor="start"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            AFONSO PENA
          </text>
          <text x="750" y="425" textAnchor="start" fill="white" fontSize="10">
            L
          </text>
        </g>

        <g>
          <line
            x1="570"
            y1="550"
            x2="620"
            y2="620"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="650"
            y="650"
            textAnchor="start"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            SÃO PEDRO
          </text>
        </g>

        <g>
          <line
            x1="450"
            y1="650"
            x2="450"
            y2="720"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="450"
            y="745"
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            ARISTOCRATA
          </text>
          <text x="450" y="760" textAnchor="middle" fill="white" fontSize="10">
            S
          </text>
        </g>

        <g>
          <line
            x1="330"
            y1="560"
            x2="270"
            y2="620"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="230"
            y="645"
            textAnchor="end"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            SÃO DOMINGOS
          </text>
        </g>

        <g>
          <line
            x1="280"
            y1="400"
            x2="210"
            y2="400"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="190"
            y="385"
            textAnchor="end"
            fill="white"
            fontSize="11"
            fontWeight="bold"
          >
            MUSEU MUNICIPAL
          </text>
          <text
            x="190"
            y="400"
            textAnchor="end"
            fill="white"
            fontSize="11"
            fontWeight="bold"
          >
            ATÍLIO ROCCO
          </text>
          <text x="190" y="415" textAnchor="end" fill="white" fontSize="10">
            O
          </text>
        </g>

        <g>
          <line
            x1="320"
            y1="240"
            x2="260"
            y2="180"
            stroke="white"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
          <text
            x="230"
            y="170"
            textAnchor="end"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            SÃO CRISTÓVÃO
          </text>
        </g>

        <g
          transform={`translate(${sunPosition.x}, ${sunPosition.y}) scale(0.7) translate(-32, -32)`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <path
            fill="#fc0"
            d="M36.87,13.83L32,0l-4.89,13.88c1.59-.44,3.25-.69,4.98-.69s3.25.24,4.78.64Z"
          />
          <path
            fill="#fc0"
            d="M48.35,22.56l6.3-13.11-13.14,6.28c2.83,1.64,5.2,4,6.85,6.83Z"
          />
          <path
            fill="#fc0"
            d="M64,32l-13.73-4.83c.42,1.55.66,3.18.66,4.86s-.24,3.26-.64,4.8l13.71-4.83Z"
          />
          <path
            fill="#fc0"
            d="M22.63,15.77l-13.24-6.36,6.36,13.29c1.65-2.87,4.02-5.27,6.88-6.93Z"
          />
          <path
            fill="#fc0"
            d="M27.14,50.19l4.86,13.81,4.85-13.76c-1.52.4-3.11.63-4.75.63s-3.38-.25-4.96-.68Z"
          />
          <path
            fill="#fc0"
            d="M13.25,32.03c0-1.71.25-3.36.68-4.94L0,32l13.92,4.9c-.42-1.56-.66-3.18-.66-4.87Z"
          />
          <path
            fill="#fc0"
            d="M41.42,48.37l13.18,6.33-6.29-13.15c-1.67,2.83-4.04,5.18-6.9,6.82Z"
          />
          <path
            fill="#fc0"
            d="M15.75,41.35l-6.39,13.31,13.3-6.36c-2.87-1.67-5.26-4.07-6.91-6.95Z"
          />
          <path
            fill="#fc0"
            d="M32.09,15.83c-8.93,0-16.2,7.27-16.2,16.2s7.27,16.2,16.2,16.2,16.2-7.27,16.2-16.2-7.27-16.2-16.2-16.2Z"
          />
        </g>
      </svg>
    </div>
  );
}
