block('fast-template').elem('head').content()(
    function () {
        return [
            {
                block: 'text',
                content: 'Быстрый черновик'
            },
            {
                block: 'link',
                mods: {type: 'close', 'fa-icon': 'caret-up'}
            }
        ]
    }
)
