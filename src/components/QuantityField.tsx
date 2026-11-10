import { previewQuantityCap } from "../data/catalog";

type QuantityFieldProps = {
  value: number;
  onChange: (value: number) => void;
  label: string;
};

export function QuantityField({ value, onChange, label }: QuantityFieldProps) {
  return (
    <div role="group" aria-label={`Quantity for ${label}`} className="inline-flex items-center border border-current">
      <button
        type="button"
        className="min-h-11 min-w-11 font-display text-2xl leading-none"
        aria-label={`Reduce quantity of ${label}`}
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
      >
        −
      </button>
      <span className="min-w-8 text-center font-display text-2xl">{value}</span>
      <button
        type="button"
        className="min-h-11 min-w-11 font-display text-2xl leading-none"
        aria-label={`Increase quantity of ${label}`}
        onClick={() => onChange(value + 1)}
        disabled={value >= previewQuantityCap}
      >
        +
      </button>
    </div>
  );
}
