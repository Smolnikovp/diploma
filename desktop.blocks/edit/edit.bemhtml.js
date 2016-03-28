block('edit')(
    def()(function(){
        var mods = this.mods;

        mods.type = mods.type ? mods.type : 'visual';

        return applyNext();
    }),
    js()(true),
    content()(
        function(){
            return [
                {
                    elem: 'head'
                },
                {
                    elem: 'formating'
                },
                {
                    elem: 'body',
                    mods: this.ctx.mods
                }
            ]
        }
    )
)
