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
        content: [
            {
                block: 'menu',
                mods: {okay: 'header'},
                content: [
                    {
                        block: 'menu-item',
                        mods: {type: 'link'},
                        val: 1,
                        content: 'Море'
                    },
                    {
                        block: 'menu-item',
                        val: 2,
                        content: 'Горы'
                    }
                ]
            }
        ]
    },
};

