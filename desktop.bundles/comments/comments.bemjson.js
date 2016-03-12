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
                            content: [
                                {
                                    block: 'button',
                                    mods: {focused: true, theme: 'islands', size: 'l'},
                                    text: 'Все'
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'islands', size: 'l'},
                                    text: 'Ожидающие (0)'
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'islands', size: 'l'},
                                    text: 'Одобренные'
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'islands', size: 'l'},
                                    text: 'Спам'
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'islands', size: 'l'},
                                    text: 'Корзина (0)'
                                }
                            ]
                        },
                        {
                            elem: 'layout',
                            mix: {block: 'layout'},
                            content: [
                                {
                                    elem: 'left',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'Изменить'},
                                                {val: 2, text: 'Удалить'},
                                                {val: 3, text: 'Сохранить'}
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey'},
                                            text: 'Применить'
                                        }
                                    ]
                                },
                                {
                                    elem: 'right',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'Все типы комментариев', disabled: true},
                                                {val: 2, text: 'Важные'},
                                                {val: 3, text: 'Личные'},
                                                {val: 4, text: 'etc.'}
                                            ]
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey'},
                                            text: 'Фильтр'
                                        }
                                    ]
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
                                                    block: 'inline',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            content: 'Отправлен'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                            content: 'DateTime'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                                }
                                            ]
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
                                                    block: 'inline',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            content: 'Отправлен'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                            content: 'DateTime'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'text',
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                                }
                                            ]
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
                                                    block: 'inline',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            content: 'Отправлен'
                                                        },
                                                        {
                                                            block: 'link',
                                                            mods: {type: 'inline', theme: 'turquoise'},
                                                            content: 'DateTime'
                                                        }
                                                    ]
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
                            block: 'inline',
                            content: [
                                {
                                    block: 'select',
                                    mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                    val: 1,
                                    options: [
                                        {val: 1, text: 'Изменить'},
                                        {val: 2, text: 'Удалить'},
                                        {val: 3, text: 'Сохранить'}
                                    ]
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'grey'},
                                    text: 'Применить'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
