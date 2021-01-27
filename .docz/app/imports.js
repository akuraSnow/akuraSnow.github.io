export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/Buttons/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-buttons-index" */ 'src/Buttons/index.mdx'
    ),
  'src/DragModel/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-drag-model-index" */ 'src/DragModel/index.mdx'
    ),
  'src/QuestionEditor/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-question-editor-index" */ 'src/QuestionEditor/index.mdx'
    ),
  'src/uploadFile/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-upload-file-index" */ 'src/uploadFile/index.mdx'
    ),
}
