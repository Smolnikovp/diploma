block('comments')(
    js()(true),
    content()(
        function () {
            return [
                {
                    block: 'control-group',
                    mix: {block: 'comments', elem: 'control-group'},
                    content: ['Все', 'Ожидающие(0)', 'Одобренные(0)', 'Спам', 'Корзина(0)'].map(function (service) {
                        return {
                            block: 'button',
                            mods: {theme: 'islands', size: 'l', focused: service === 'Все'},
                            text: service
                        };
                    })
                },
                {
                    elem: 'layout',
                    mix: {block: 'layout'},
                    content: [
                        {
                            block: 'groupbox',
                            mods: {type: 'default'}
                        },
                        {
                            block: 'groupbox',
                            mods: {type: 'comments'}
                        }
                    ]
                },
                {
                    block: 'table',
                    mix: {block: 'comments', elem: 'table'},
                    content: [
                        {
                            elem: 'head'
                        },
                        {
                            elem: 'content'
                        },
                        {
                            elem: 'content'
                        },
                        {
                            elem: 'content'
                        },
                        {
                            elem: 'content'
                        },
                        {
                            elem: 'content'
                        }
                    ]
                },
                {
                    elem: 'layout',
                    mix: {block: 'layout'},
                    content: [
                        {
                            block: 'groupbox',
                            mods: {type: 'default'}
                        }
                    ]
                }
            ]
        }
    )
)
