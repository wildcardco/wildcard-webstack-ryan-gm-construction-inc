import { useRef, type CSSProperties } from "react";
import { useMeasure } from "../hooks/useMeasure";
import type { CatalogImage } from "../data/catalog";

type PhotoFrameProps = {
  image: CatalogImage;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  delay?: string;
};

export function PhotoFrame({
  image,
  className = "",
  imgClassName = "",
  priority = false,
  delay = "0ms",
}: PhotoFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useMeasure(ref);
  const style = { "--delay": delay } as CSSProperties;

  return (
    <div ref={ref} className={`measure ${shown ? "is-in" : ""} ${className}`} style={style}>
      <div className="measure-target">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          className={`block h-full w-full bg-slate object-cover ${imgClassName}`}
        />
      </div>
      <span className="rule" aria-hidden="true" />
    </div>
  );
}
