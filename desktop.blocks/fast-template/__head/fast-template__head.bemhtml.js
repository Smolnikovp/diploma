block('fast-template').elem('head').content()(
    function () {
        return [
            {
                block: 'text',
                content: 'Быстрый черновик'
            },
            {
                block: 'link',
                mods: {
                    type: this.mods.type,
                    'fa-icon': 'caret-up'
                }
            }
        ]
    }
)
