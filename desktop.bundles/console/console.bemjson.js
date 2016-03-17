module.exports = {
    block: 'page',
    title: 'Консоль',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'console.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'console.js'}],
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
                    content: 'Консоль'
                },
                {
                    block: 'console'
                }
            ]
        }
    ]
};
