block('fast-template')(
    js()(true),
    def()(function(){
        var mods = this.mods;

        mods.type = mods.type ? mods.type : 'open';

        return applyNext();
    }),
    content()(
        function(){
            return [
                {
                    elem: 'head'
                },
                {
                    elem: 'body'
                }
            ]
        }
    )
)
