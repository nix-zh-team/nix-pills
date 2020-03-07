module.exports = {
  title: '散装 Nix',
  base: '/nix-pills/',
  head: [
    ['link', { rel: 'icon', href: 'https://nix-zh-team.github.io/nix-pills/nix.png' }]
  ],
  description: 'Unofficial ported of Nix Pills in Chinese.',
  themeConfig: {
    logo: '/nix.png',
    displayAllHeaders: false,
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,

    sidebar: [
      '/',
      ['/preface','前言'],
      ['why-you-should-give-it-a-try','第 1 章： 尝试 Nix 的理由'],
    ]
  }
}