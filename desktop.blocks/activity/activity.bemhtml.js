block('activity').content()(
    function () {
        return [
            {
                elem: 'head',
                content: [
                    {
                        block: 'text',
                        content: 'Активность'
                    },
                    {
                        block: 'link',
                        mods: {type: 'close', 'fa-icon': 'caret-up'}
                    }
                ]
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
