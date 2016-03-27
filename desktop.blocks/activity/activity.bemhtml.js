block('activity')(
    js()(true),
    def()(function(){
        var mods = this.mods;

        mods.type = mods.type ? mods.type : 'open';

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
                                type: this.mods.type,
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
