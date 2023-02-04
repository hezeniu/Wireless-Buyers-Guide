const {
    description
} = require('../package')

module.exports = {
    title: '无线购买指南',
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Wireless-Buyers-Guide/',

    watch: {
        $page(newPage, oldPage) {
            if (newPage.key !== oldPage.key) {
                requestAnimationFrame(() => {
                    if (this.$route.hash) {
                        const element = document.getElementById(this.$route.hash.slice(1));

                        if (element && element.scrollIntoView) {
                            element.scrollIntoView();
                        }
                    }
                });
            }
        }
    },

    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-multimd-table'), {
                rowspan: true,
            });
        }
    },

    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/sumingyd/Wireless-Buyers-Guide',
        editLinks: true,
        editLinkText: '帮助我们改进此页!',
        logo: '/homepage.png',
        nav: [{
            text: '指南菜单',
            ariaLabel: 'Language Menu',
            items: [
            {
                text: '开始使用ACPI',
                link: 'https://sumingyd.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'OpenCore安装指南',
                link: 'https://sumingyd.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'OpenCore安装后',
                link: 'https://sumingyd.github.io/OpenCore-Post-Install/'
            },
            {
                text: '显卡购买指南',
                link: 'https://sumingyd.github.io/GPU-Buyers-Guide/'
            },
            {
                text: '避免购买指南',
                link: 'https://sumingyd.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
            /*
              {
                text: 'Github',
                link: 'https://github.com/sumingyd/OpenCore-Install-Guide'
              }
            */
        ],
        sidebar: [{
            title: '介绍',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
                'unsupported',
                'Kext',
                'Airport',
            ]

        },
        {
            title: '无线网卡的类型',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/types-of-wireless-card/pcie',
                '/types-of-wireless-card/mpcie',
                '/types-of-wireless-card/m2',
                '/types-of-wireless-card/Express',
                '/types-of-wireless-card/usb',
            ]
        },
        {
            title: '杂项',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/misc/bluetooth',
                '/misc/intel',
                '/misc/credit',
            ]
        },
        ],
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
