block('publish')(
    js()(true),
    content()(
        function(){
            return [
                {
                    elem: 'head',
                    content: {
                        block: 'text',
                        content: 'Опубликовать'
                    }
                },
                {
                    elem: 'buttons',
                    content: this.ctx.mods.note ? [
                        {
                            block: 'button',
                            content: 'Сохранить'
                        },
                        {
                            block: 'button',
                            content: 'Опубликовать'
                        }
                    ] : [
                        {
                            block: 'button',
                            content: 'Изменить'
                        }
                    ]
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'text',
                            content: 'Статус:'
                        },
                        {
                            block: 'text',
                            content: 'Черновик'
                        },
                        {
                            block: 'link',
                            mods: { theme: 'turquoise'},
                            url: '#',
                            content: 'Изменить'
                        }
                    ]
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'text',
                            content: 'Видимость:'
                        },
                        {
                            block: 'text',
                            content: 'Открыто'
                        },
                        {
                            block: 'link',
                            mods: { theme: 'turquoise'},
                            url: '#',
                            content: 'Изменить'
                        }
                    ]
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'text',
                            mods: { 'fa-icon': 'calendar'},
                            content: 'Опубликовать:'
                        },
                        {
                            block: 'text',
                            content: 'Сразу'
                        },
                        {
                            block: 'link',
                            mods: { theme: 'turquoise'},
                            url: '#',
                            content: 'Изменить'
                        }
                    ]
                },
                {
                    elem: 'bottom'
                }
            ]
        }
    )
)
