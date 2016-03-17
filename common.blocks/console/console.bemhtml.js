block('console')(
    js()(true),
    content()(
        function(){
            return [
                {
                    block: 'welcome'
                },
                {
                    block: 'layout',
                    mods: {type: 'console'}
                }
            ]
        }
    )
)
