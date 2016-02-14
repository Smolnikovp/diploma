module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'head',
            content: {
                block: 'menu',
                mods: {type: 'top'},
                content: [
                    {
                        elem: 'menu-item',
                        content: 'Host'
                    },
                    {
                        elem: 'menu-item',
                        val: 2,
                        content: ''
                    },
                    {
                        elem: 'menu-item',
                        val: 3,
                        content: [
                            {
                            },
                            {
                                block: 'link',
                                url: '#',
                                content: 'Первый сайт'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 4,
                        content: [
                            {
                                block: 'link',
                                url: '#',
                                content: '1'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 5,
                        content: [
                            {
                            },
                            {
                                block: 'link',
                                url: '#',
                                content: '0'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 6,
                        content: [
                            {
                            },
                            {
                                block: 'link',
                                url: '#',
                                content: 'Добавить'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'article',
            content: [
                {}
            ]
        }
    ]
};

