/// <reference types="vite/client" />

declare module '*.svg?react' {
  import React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

// For plugin vite-imagetools
// Single-asterisk wildcard matching for vite-imagetools queries:
// Matches image imports ending with specific width queries:

declare module '*&format=avif' {
  const src: string;
  export default src;
}

declare module '*&format=jpeg' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}

declare module '*&format=avif;webp;png' {
  const src: string;
  export default src;
}

declare module '*?as=srcset' {
  const src: string;
  export default src;
}

declare module '*?w=750' {
  const src: string;
  export default src;
}

declare module '*?w=1440' {
  const src: string;
  export default src;
}
