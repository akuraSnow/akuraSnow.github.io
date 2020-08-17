export const imports = {
  'src/Buttons/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-buttons-index" */ 'src/Buttons/index.mdx'
    ),
  'src/uploadFile/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-upload-file-index" */ 'src/uploadFile/index.mdx'
    ),
}
