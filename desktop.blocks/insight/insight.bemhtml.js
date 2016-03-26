block('insight').content()(
    function () {
        return [
            {
                elem: 'head',
                content: [
                    {
                        block: 'text',
                        content: 'На виду'
                    },
                    {
                        block: 'link',
                        mods: { type: 'close', 'fa-icon': 'caret-up'}
                    }
                ]
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
