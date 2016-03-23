module.exports = {
    block: 'page',
    title: 'Элементы',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'elements.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'elements.js'}],
    content: [
        {
            block: 'main-menu'
        },
        {
            block: 'article',
            content: [
                {
                    block: 'text',
                    mix: {block: 'article', elem: 'heading-text'},
                    content: 'Элементы'
                },
                {
                    block: 'elements'
                }
            ]
        }
    ]
};
