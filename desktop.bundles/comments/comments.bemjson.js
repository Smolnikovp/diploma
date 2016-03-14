module.exports = {
    block: 'page',
    title: 'Комментарии',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'comments.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'comments.js'}],
    content: [
        {
            block: 'article',
            content: [
                {
                    block: 'text',
                    mix: {block: 'article', elem: 'heading-text'},
                    mods: {'fa-icon': 'commentz'},
                    content: 'Комментарии'
                },
                {
                    block: 'comments',
                    content: [
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
                                    block: 'groupbox'
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
                                    elem: 'col',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'checkbox',
                                                mods: {theme: 'islands', size: 'l'}
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'text',
                                                content: 'Автор'
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'text',
                                                content: 'Комментарий'
                                            }
                                        }
                                    ]
                                },
                                {
                                    elem: 'col',
                                    content: [
                                        {
                                            elem: 'row',
                                            content: {
                                                block: 'checkbox',
                                                mods: {theme: 'islands', size: 'l'}
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    block: 'account-info',
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            url: 'https://cdn4.iconfinder.com/data/icons/gray-toolbar-7/512/user-512.png',
                                                            width: 50,
                                                            height: 50
                                                        },
                                                        {
                                                            block: 'text',
                                                            content: '%username%\n'
                                                        },
                                                        {
                                                            block: 'link',
                                                            url: '=content',
                                                            mods: {theme: 'turquoise'},
                                                            content: 'qwerty@gmail.com'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {theme: 'turquoise'},
                                                    content: 'IP address'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    block: 'text',
                                                    content: 'Отправлен'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'DateTime'
                                                },
                                                {
                                                    block: 'text',
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'layout',
                            mix: {block: 'layout'},
                            content: [
                                {
                                    block: 'groupbox'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
