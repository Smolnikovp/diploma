module.exports = {
    block: 'page',
    title: 'Комментарии',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'comments.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'comments.js'}],
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
                    mods: {'fa-icon': 'commentz'},
                    content: 'Комментарии'
                },
                {
                    block: 'comments'
                }
            ]
        }
    ]
};
