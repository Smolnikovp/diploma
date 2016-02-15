module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: [
        {
            block: 'head',
            content: {
                block: 'menu',
                mods: {type: 'top'},
                content: [
                    {
                        elem: 'menu-item',
                        content: {
                            block: 'text',
                            content: 'Host'
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 2,
                        content: {
                            block: 'link',
                            mods: {'fa-icon': 'wordpress'},
                            content: ''
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 3,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'home'},
                                url: '#',
                                content: 'Первый сайт'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 4,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'refresh'},
                                url: '#',
                                content: '1'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 5,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'comments'},
                                url: '#',
                                content: '0'
                            }
                        ]
                    },
                    {
                        elem: 'menu-item',
                        val: 6,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'plus-circle'},
                                url: '#',
                                content: 'Добавить'
                            }
                        ]
                    },
                    {
                        block: 'menu-item',
                        val: 7,
                        content: [
                            {
                                block: 'link',
                                mods: {'fa-icon': 'user'},
                                url: '#',
                                content: 'Привет, %user%'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'article',
            content: [
                {
                    block: 'article-menu',
                    content: [
                        {
                            block: 'menu',
                            mods: {type: 'left'},
                            content: [
                                {
                                    elem: 'menu-item',
                                    val: 1,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'tachometer'},
                                        url: '#',
                                        content: 'Консоль'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 2,
                                    content: {
                                        block: 'link',
                                        url: '#',
                                        content: 'Главная'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 3,
                                    content: {
                                        block: 'link',
                                        url: '#',
                                        content: 'Обновления'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 4,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'thumb-tack'},
                                        url: '#',
                                        content: 'Заметки'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 5,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'file'},
                                        url: '#',
                                        content: 'Страницы'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 6,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'comments'},
                                        url: '#',
                                        content: 'Комментарии'
                                    }
                                }
                            ]
                        },
                        {
                            block: 'menu',
                            mods: {type: 'left'},
                            content: [
                                {
                                    elem: 'menu-item',
                                    val: 1,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'paint-brush'},
                                        url: '#',
                                        content: 'Внешний вид'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 2,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'plug'},
                                        url: '#',
                                        content: 'Плагины'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 3,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'uses'},
                                        url: '#',
                                        content: 'Пользователи'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 4,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'wrench'},
                                        url: '#',
                                        content: 'Инструменты'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 5,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'cogs'},
                                        url: '#',
                                        content: 'Настройки'
                                    }
                                },
                                {
                                    elem: 'menu-item',
                                    val: 6,
                                    content: {
                                        block: 'link',
                                        mods: {'fa-icon': 'chevron-circle-left'},
                                        url: '#',
                                        content: 'Свернуть меню'
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'container',
                    content: [
                        {
                            elem: 'text',
                            mods: {type: 'heading'},
                            content: 'Консоль'
                        },
                        {
                            elem: 'block-horiz',
                            mods: {type: 'full'},
                            content: [
                                {

                                }
                            ]
                        },
                        {
                            elem: 'block-horiz',
                            mods: {type: 'half'},
                            content: [
                                {

                                }
                            ]
                        },
                        {
                            elem: 'block-horiz',
                            mods: {type: 'half'},
                            content: [
                                {

                                }
                            ]
                        },
                        {
                            elem: 'block-horiz',
                            mods: {type: 'half'},
                            content: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

