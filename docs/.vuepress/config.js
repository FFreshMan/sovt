module.exports = {
  base:'/sovt/',
  title: 'sovt UI',
  description: '一个简约实用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
    ]
      },
      {
        title: '组件',
        children: ['/components/','/components/button',
          '/components/grid','/components/input','/components/layout',
          '/components/popover','/components/tabs','/components/toast','/components/collapse']
      },
    ]
  }
}