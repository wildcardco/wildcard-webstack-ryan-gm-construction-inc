export function PageHeader({ title, lede }) {
  return (
    <header className="border-b border-mist bg-mist">
      <div className="mx-auto max-w-page px-4 py-8">
        <h1 className="text-3xl leading-tight">{title}</h1>
        {lede ? <p className="mt-3 max-w-2xl text-slate">{lede}</p> : null}
      </div>
    </header>
  );
}
