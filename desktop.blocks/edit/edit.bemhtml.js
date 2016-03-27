block('edit')(
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
