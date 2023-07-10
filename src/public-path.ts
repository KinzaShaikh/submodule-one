declare global {
    interface Window {
      __POWERED_BY_QIANKUN__: boolean;
      __INJECTED_PUBLIC_PATH_BY_QIANKUN__: any;
    }
  }
  declare var __webpack_public_path__: string;

  //it will modify the runtime public path

  if (window.__POWERED_BY_QIANKUN__) {
     __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
  
  export {};