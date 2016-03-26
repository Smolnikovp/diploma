block('insight')(
    js()(true),
    content()(
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
                            mods: {'fa-icon': 'caret-up'}
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
)
