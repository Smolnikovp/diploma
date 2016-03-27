block('fast-template')(
    js()(true),
    def()(function(){
        var mods = this.mods;

        mods.open = mods.open ? mods.open : 'yes';

        return applyNext();
    }),
    content()(
        function(){
            return [
                {
                    elem: 'head',
                    content: [
                        {
                            block: 'text',
                            content: 'Быстрый черновик'
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
                    elem: 'body'
                }
            ]
        }
    )
)
