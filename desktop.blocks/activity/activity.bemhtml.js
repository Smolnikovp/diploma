block('activity')(
    js()(true),
    def()(function(){
        var mods = this.mods;

        mods.open = mods.open ? mods.open : 'yes';

        return applyNext();
    }),
    content()(
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
                            mods: {
                                open: this.mods.open,
                                'fa-icon': 'caret-up'
                            }
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
)
