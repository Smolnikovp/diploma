block('publish').content()(
    function(){
        return [
            {
                elem: 'head',
                content: {
                    block: 'text',
                    mods: {'fa-icon': 'caret-up'},
                    content: 'Опубликовать'
                }
            },
            {
                elem: 'head',
                content: [
                    {
                        block: 'button',
                        content: 'Сохранить'
                    },
                    {
                        block: 'button',
                        content: 'Опубликовать'
                    }
                ]
            }
        ]
    }
)
