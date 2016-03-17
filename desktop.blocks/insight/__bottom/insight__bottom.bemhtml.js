block('insight').elem('bottom').content()(
    function(){
        return [
            {
                block: 'text',
                content: '%projectname% с темой оформления'
            },
            {
                block: 'link',
                mods: {type: 'inline', theme: 'turquoise'},
                url: '#',
                content: 'turquoise'
            }
        ]
    }
)
