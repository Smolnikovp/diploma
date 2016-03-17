block('publish').elem('body').content()(
    function(){
        return [
            {
                block: 'radio-group',
                content: ['Все рубрики', 'Часто используемые'].map(function(service){
                    return {
                        block: 'button',
                        mods: {focused: service === 'Все рубрики'},
                        text: service
                    }

                })
            }
        ]
    }
)
