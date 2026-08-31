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
declare module '*.mp4';
declare module '*.MP4';
declare module '*.dcm';
declare module '*.pdf';

declare module '*.types';

interface ImportMetaEnv {
  readonly VITE_LOCAL_STORAGE_LANGUAGE_KEY: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_EMAILJS_PRIVATE_KEY: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_DEFAULT_CACHE_EXPIRATION: string;
  readonly VITE_INSTAGRAM_LINK: string;
  readonly VITE_GA4_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
