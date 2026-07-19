declare module '*.svg?react' {
  import React from 'react';
  const Component: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Component;
}

declare module '*?as=srcset&w=300;600;1200&format=avif;webp;png' {
  const content: string;
  export default content;
}
