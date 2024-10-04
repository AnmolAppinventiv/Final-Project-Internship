declare module 'aos' {
    export function init(options?: any): void;
    export function refresh(): void;
    export function refreshHard(): void;
    export function setGlobalOptions(options: any): void;
    export function isSupported(): boolean;
    export function getScrollTop(): number;
    export function getScrollHeight(): number;
  }
  