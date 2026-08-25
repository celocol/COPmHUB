import type { CSSProperties } from "react";

type Plant = {
  delay: string;
  wind: string;
  sway: string;
  left: string;
  bottom: string;
  height: string;
  leftSm?: string;
  bottomSm?: string;
  heightSm?: string;
  leftLg?: string;
  bottomLg?: string;
  heightLg?: string;
  peak?: boolean;
  hideBelow?: "sm" | "md";
};

const PLANTS: Plant[] = [
  {
    left: "42%",
    bottom: "22%",
    height: "2.8rem",
    leftSm: "44%",
    bottomSm: "24%",
    heightSm: "3.1rem",
    leftLg: "46%",
    bottomLg: "26%",
    heightLg: "3.8rem",
    delay: "0.08s",
    wind: "4.8s",
    sway: "4.5deg",
    hideBelow: "md",
  },
  {
    left: "54%",
    bottom: "34%",
    height: "3.2rem",
    leftSm: "55%",
    bottomSm: "36%",
    heightSm: "3.5rem",
    leftLg: "56%",
    bottomLg: "38%",
    heightLg: "4.4rem",
    delay: "0.16s",
    wind: "5.2s",
    sway: "4deg",
  },
  {
    left: "78%",
    bottom: "50%",
    height: "5.75rem",
    leftSm: "80%",
    bottomSm: "52%",
    heightSm: "7rem",
    leftLg: "81%",
    bottomLg: "54%",
    heightLg: "9.5rem",
    delay: "0.2s",
    wind: "6.2s",
    sway: "2.6deg",
    peak: true,
  },
  {
    left: "84%",
    bottom: "40%",
    height: "3.3rem",
    leftSm: "85%",
    bottomSm: "42%",
    heightSm: "3.7rem",
    leftLg: "86%",
    bottomLg: "40%",
    heightLg: "4.5rem",
    delay: "0.28s",
    wind: "5s",
    sway: "4.2deg",
  },
  {
    left: "92%",
    bottom: "28%",
    height: "3rem",
    leftSm: "93%",
    bottomSm: "30%",
    heightSm: "3.3rem",
    leftLg: "94%",
    bottomLg: "28%",
    heightLg: "4rem",
    delay: "0.34s",
    wind: "5.6s",
    sway: "5deg",
    hideBelow: "sm",
  },
  {
    left: "63%",
    bottom: "20%",
    height: "2.7rem",
    leftSm: "64%",
    bottomSm: "22%",
    heightSm: "3rem",
    leftLg: "65%",
    bottomLg: "22%",
    heightLg: "3.6rem",
    delay: "0.12s",
    wind: "4.4s",
    sway: "5deg",
    hideBelow: "md",
  },
];

function plantVars(plant: Plant): CSSProperties {
  return {
    "--p-left": plant.left,
    "--p-bottom": plant.bottom,
    "--p-h": plant.height,
    "--p-left-sm": plant.leftSm,
    "--p-bottom-sm": plant.bottomSm,
    "--p-h-sm": plant.heightSm,
    "--p-left-lg": plant.leftLg,
    "--p-bottom-lg": plant.bottomLg,
    "--p-h-lg": plant.heightLg,
    "--delay": plant.delay,
    "--wind": plant.wind,
    "--sway": plant.sway,
  } as CSSProperties;
}

export function HeroLandscape() {
  return (
    <div
      className="hero-landscape pointer-events-none absolute inset-x-0 bottom-0 top-[42%] z-0 sm:top-[34%] lg:top-[8%]"
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 right-0 flex items-end justify-end">
        <div className="relative h-full w-max max-w-none">
          <img
            src="/hero/hill.png"
            alt=""
            className="pointer-events-none h-full w-auto max-w-none select-none"
            draggable={false}
          />
          {PLANTS.map((plant, index) => (
            <span
              key={index}
              className={
                "plant-grow plant-slot pointer-events-none absolute w-auto origin-bottom" +
                (plant.peak ? " z-[1]" : "") +
                (plant.hideBelow === "sm" ? " hidden sm:block" : "") +
                (plant.hideBelow === "md" ? " hidden md:block" : "")
              }
              style={plantVars(plant)}
            >
              <img
                src="/hero/plant.png"
                alt=""
                className="plant-sway h-full w-auto origin-bottom select-none"
                style={
                  {
                    "--delay": plant.delay,
                    "--wind": plant.wind,
                    "--sway": plant.sway,
                  } as CSSProperties
                }
                draggable={false}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
