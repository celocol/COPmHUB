import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  label: string;
  className?: string;
  event: string;
  section?: string;
  product?: string;
  external?: boolean;
};

export function CtaLink({
  href,
  children,
  label,
  className,
  event,
  section,
  product,
  external,
}: CtaLinkProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      className={className}
      data-track={event}
      data-label={label}
      data-section={section}
      data-product={product}
      data-destination={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
