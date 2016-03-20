module.exports = {
    block: 'page',
    title: 'Записи',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'note.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'note.js'}],
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
                    block: 'note'
                }
            ]
        }
    ]
};
