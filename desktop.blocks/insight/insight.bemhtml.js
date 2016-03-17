block('insight').content()(
    function(){
        return [
            {
                elem: 'head',
                content: {
                    block: 'text',
                    mods: {'fa-icon': 'caret-up'},
                    content: 'На виду'
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
