block('table').elem('comment').content()(
    function () {
        return [
            {
                block: 'text',
                content: 'Отправлен'
            },
            {
                block: 'link',
                mods: {type: 'inline', theme: 'turquoise'},
                content: 'DateTime'
            },
            {
                block: 'text',
                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
            }
        ]
    }
)
