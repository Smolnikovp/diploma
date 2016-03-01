module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'comments.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'comments.min.js'}],
    content: [
        {
            block: 'article',
            mods: {type: 'comments'},
            content: [
                {
                    block: 'text',
                    tag: 'span',
                    mods: {type: 'heading-large'},
                    content: 'Комментарии'
                },
                {
                    block: 'control-group',
                    content: [
                        {
                            block: 'button',
                            mods: {focused: true, theme: 'islands', size: 'm'},
                            text: 'Все'
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'm'},
                            text: 'Ожидающие (0)'
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'm'},
                            text: 'Одобренные'
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'm'},
                            text: 'Спам'
                        },
                        {
                            block: 'button',
                            mods: {theme: 'islands', size: 'm'},
                            text: 'Корзина (0)'
                        }
                    ]
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content:[
                                {
                                    block: 'select',
                                    mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                    val: 1,
                                    options: [
                                        {val: 1, text: 'Действия', disabled: true},
                                        {val: 2, text: 'удалить'},
                                        {val: 3, text: 'anything'}
                                    ]
                                },
                                {
                                    block: 'button',
                                    mods: {theme: 'grey'},
                                    content: 'Применить'
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
                                    content: 'Фильтр'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'lego',
                    content: [
                        {
                            block: 'table',
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
                                                            tag: 'span',
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
                                                            tag: 'span',
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
                                                    tag: 'span',
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
                                                            tag: 'span',
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
                                                            tag: 'span',
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
                                                    tag: 'span',
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
                                                            tag: 'span',
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
                                                            tag: 'span',
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
                                                    tag: 'span',
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                                                }
                                            ]
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
                                {val: 1, text: 'Действия', disabled: true},
                                {val: 2, text: 'удалить'},
                                {val: 3, text: 'anything'}
                            ]
                        },
                        {
                            block: 'button',
                            mods: {theme: 'grey'},
                            content: 'Применить'
                        }
                    ]
                }
            ]
        }
    ]
};
