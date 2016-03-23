block('comments')(
    js()(true),
    content()(
        function () {
            return [
                {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'm', type : 'button' },
                    val: 1,
                    options : [
                        { val : 1, text : 'Все' },
                        { val : 2, text : 'Ожидающие(0)' },
                        { val : 3, text : 'Одобренные(0)' },
                        { val : 4, text : 'Спам' },
                        { val : 5, text : 'Корзина(0)' }
                    ]
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
