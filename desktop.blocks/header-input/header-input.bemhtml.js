block('header-input').content()(
    function(){
        return [
            {
                block: 'input',
                mods: { type: 'large' },
                placeholder: 'Введите заголовок'
            },
            {
                block: 'text',
                content: 'Постоянная ссылка:'
            },
            {
                block: 'link',
                url: '=content',
                content: 'https://github.com/bem/project-stub'
            },
            {
                block: 'button',
                content: 'Изменить постоянные ссылки'
            }
        ]
    }
)
