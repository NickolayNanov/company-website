import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 mb-3 text-lg font-semibold text-foreground" {...props} />
    ),
    p: (props) => (
      <p className="my-5 text-base leading-8 text-muted-foreground" {...props} />
    ),
    ul: (props) => (
      <ul className="my-6 space-y-3 pl-5 text-muted-foreground" {...props} />
    ),
    li: (props) => <li className="list-disc leading-7" {...props} />,
    strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
    a: (props) => (
      <a
        className="font-medium text-primary underline decoration-primary/30 transition-colors hover:decoration-primary"
        {...props}
      />
    ),
    ...components,
  };
}
