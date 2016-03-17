block('activity').elem('recently-add').content()(
    function(){
        return [
            {
                block: 'text',
                content: 'Недавно добавлены'
            },
            {
                block: 'text',
                content: 'Сегодня, 12:11'
            },
            {
                block: 'link',
                mods: {theme: 'turquoise'},
                url: '#',
                content: 'Hello, world!'
            }
        ]
    }
)
