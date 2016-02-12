module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: {
        block: 'head',
        content: {
            block: 'layout',
            content: [
                {
                    elem: 'left',
                    content: 'Панель управления',
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'image',
                            attrs: {
                                src: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png',
                                width: '50px',
                                height: '50px'
                            },
                        },
                        {
                            elem: 'cmsname',
                            content: 'CMS on BEM',
                        }
                    ],
                },
                {
                    block: 'delimeter',
                    content: ''
                }
            ]
        }
    },
};

