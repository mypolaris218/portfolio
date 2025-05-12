declare module 'react-gtm-module' {
  const TagManager: {
    initialize: (options: { gtmId: string }) => void;
    dataLayer: (options: { dataLayer: object }) => void;
  };
  export default TagManager;
}
