block('edit')(
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
