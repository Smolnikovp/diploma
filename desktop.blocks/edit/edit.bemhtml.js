block('edit').content()(
    mod( 'type', 'visual' ),
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
