export function UnverifiedLine() {
  return (
    <p className="text-sm text-slate">
      Price: Not verified. Contact for quote. Stock: Not verified.
    </p>
  );
}

export function PartNumberLine({ partNumber }) {
  return (
    <p className="text-sm text-slate">
      Part number: {partNumber || "Not verified"}
    </p>
  );
}
