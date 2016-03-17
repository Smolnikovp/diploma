block('fast-template').elem('body').content()(
    function () {
        return [
            {
                block: 'input',
                mods: {type: 'medium'},
                placeholder: 'Заголовок'
            },
            {
                block: 'textarea',
                placeholder: 'О чем хотите написать?'
            },
            {
                block: 'button',
                mods: {theme: 'turquoise', type: 'medium'},
                content: 'Сохранить'
            }
        ]
    }
)
