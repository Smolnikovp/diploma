block('insight')(
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
                            content: 'На виду'
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
                },
                {
                    elem: 'bottom'
                }
            ]
        }
    )
)
