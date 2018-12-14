module.exports = {
  base: '/',
  dest: './dist',
  title: '李伟',
  description: '这是一个简单的博客',
  themeConfig: {
    repo: 'TaoXuSheng/mt-blog',
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于我', link: '/my/' },
      {
        text: '我的项目',
        items: [
          { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        'git',
        'vue-amap',
        'js-function',
        'vuepress-theme',
        'vuepress',
        'vue-business-component',
        'stylus-converter',
        'click-outside',
        'json-server'
      ]
    }
  }
}
