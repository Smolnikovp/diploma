module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'note.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'note.min.js'}],
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
                    mods: {'fa-icon': 'thumb-tack'},
                    content: 'Записи'
                },
                {
                    block: 'publish'
                }
            ]
        }
    ]
};
