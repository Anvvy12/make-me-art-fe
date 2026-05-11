/// <reference types="./@types/svg" />
/// <reference types="vite/client" />

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module '*.module.scss';
declare module '*.jpg';
declare module '*.JPG';
declare module '*.jpeg';
declare module '*.png';
declare module '*.webp';
declare module '*.gif';
declare module '*.dcm';
declare module '*.pdf';

declare module '*.types';
