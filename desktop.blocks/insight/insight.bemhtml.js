block('insight')(
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
                            content: 'На виду'
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
                    elem: 'body'
                },
                {
                    elem: 'bottom'
                }
            ]
        }
    )
)
