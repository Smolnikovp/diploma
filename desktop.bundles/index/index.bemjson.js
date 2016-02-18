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
                                mods: {'fa-icon': 'plus'},
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
                    block: 'layout',
                    //mods: {type: 'disabled'},
                    content: [
                        {
                            elem: 'top',
                            mods: {type: 'console'},
                            content: [
                                {
                                    block: 'text',
                                    mods: {type: 'heading'},
                                    content: 'Консоль'
                                },
                                {
                                    block: 'welcome',
                                    content: [
                                        {
                                            elem: 'heading',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {type: 'heading'},
                                                    content: 'Добро пожаловать в %projectname%!'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'close', 'fa-icon': 'times-circle'},
                                                    url: '#',
                                                    content: 'Закрыть'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'text',
                                            mods: {type: 'description'},
                                            content: 'Мы собрали несколько ссылок для вашего удобства:'
                                        },
                                        {
                                            block: 'table',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {type: 'heading'},
                                                            content: 'Для начала'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'turquoise', type: 'options'},
                                                            text: 'Настройте свой сайт'
                                                        },
                                                        {
                                                            block: 'text',
                                                            content: 'или выберите <a href="#">другую тему</a>'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {type: 'heading'},
                                                            content: 'Следующие шаги'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'pencil-square-o'},
                                                            content: '<a href="#">Напишите свою первую запись</a>'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'plus'},
                                                            content: '<a href="#">Создайте страницу &#171;Обо мне&#187;</a>'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'eye'},
                                                            content: '<a href="#">Просмотрите свой сайт</a>'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: {type: 'heading'},
                                                            content: 'Другие действия'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'cogs'},
                                                            content: 'Настройте <a href="#">виджеты</a> и <a href="#">меню</a>'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'comments'},
                                                            content: '<a href="#">Включите или выключите комментарии</a>'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: {'fa-icon': 'wordpress'},
                                                            content: '<a href="#">Узнайте больше о работе с %projectname%</a>'
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
                            elem: 'left',
                            mods: {type: 'console'},
                            content: [
                                {
                                    block: 'block',
                                    mods: {type: 'horiz'},
                                    content: [
                                        {}
                                    ]
                                },
                                {
                                    block: 'block',
                                    mods: {type: 'horiz'},
                                    content: [
                                        {}
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'right',
                            mods: {type: 'console'},
                            content: [
                                {
                                    block: 'block',
                                    mods: {type: 'horiz'},
                                    content: [
                                        {}
                                    ]
                                },
                                {
                                    block: 'block',
                                    mods: {type: 'horiz'},
                                    content: [
                                        {}
                                    ]
                                },
                                {
                                    block: 'block',
                                    mods: {type: 'horiz'},
                                    content: [
                                        {}
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'layout',
                    mods: {type: 'disabled'},
                    content: [
                        {
                        }
                    ]
                }
            ]
        }
    ]
};

