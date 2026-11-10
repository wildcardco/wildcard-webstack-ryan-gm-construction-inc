import type { ReactNode } from "react";

export function PageHeader({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mx-auto max-w-[1240px] px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <p className="kicker">{kicker}</p>
      <h1 className="display mt-3 max-w-5xl text-[clamp(3.3rem,9vw,6.6rem)] text-paper">{title}</h1>
      {children ? <div className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">{children}</div> : null}
    </header>
  );
}
