block('publish').elem('bottom')(
    content()(
        function () {
            return [
                {
                    block: 'button',
                    mods: {theme: 'red'},
                    content: 'Удалить'
                },
                {
                    block: 'button',
                    mods: {theme: 'turquoise'},
                    content: 'Опубликовать'
                }
            ]
        }
    )
)
