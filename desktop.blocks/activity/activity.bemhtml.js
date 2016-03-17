block('activity').content()(
    function () {
        return [
            {
                elem: 'head',
                content: {
                    block: 'text',
                    mods: {'fa-icon': 'caret-up'},
                    content: 'Активность'
                }
            },
            {
                elem: 'recently-add'
            },
            {
                elem: 'head',
                content: {
                    block: 'text',
                    content: 'Комментарии'
                }
            },
            {
                elem: 'body'
            },
            {
                elem: 'bottom'
            }
        ]
    }
)
