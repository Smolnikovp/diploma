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
                            mods: {'fa-icon': 'wordpress'}
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
            block: 'article',
            content: [
                {
                    block: 'text',
                    mods: {type: 'heading-large'},
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
                                    mods: {type: 'heading-large'},
                                    content: 'Добро пожаловать в %projectname%!'
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    mods: {type: 'close', 'fa-icon': 'times-circle'},
                                    content: 'Закрыть'
                                }
                            ]
                        },
                        {
                            block: 'text',
                            mods: {type: 'heading-mid'},
                            content: 'Мы собрали несколько ссылок для Вашего удобства:'
                        },
                        {
                            block: 'table',
                            content: [
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-mid'},
                                            content: 'Для начала'
                                        },
                                        {
                                            block: 'button',
                                            mods: {type: 'options'},
                                            text: 'Настройте свой сайт'
                                        },
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            content: 'или'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: 'выберите другую тему'
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-mid'},
                                            content: 'Следующие шаги'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'file-text'},
                                            content: 'Напишите свою первую запись'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'pencil-square-o'},
                                            content: 'Создайте запись &#171;обо мне&#187;'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'eye'},
                                            content: 'Просмотрите свой сайт'
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-mid'},
                                            content: 'Другие действия'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'cogs'},
                                            content: 'Настройте виджеты и меню'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'comments'},
                                            content: 'Включите или выключите комментарии'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {'fa-icon': 'wrench'},
                                            content: 'Узнайте больше о %projectname%'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-mid'},
                                            content: 'На виду'
                                        },
                                        {
                                            block: 'link',
                                            mods: {type: 'close', 'fa-icon': 'caret-up'}
                                        },
                                        {
                                            block: 'table',
                                            content: [
                                                {
                                                    elem: 'row',
                                                    content: [
                                                        {
                                                            block: 'link',
                                                            url: '#',
                                                            mods: {'fa-icon': 'thumb-tack'},
                                                            content: 'n запись'
                                                        },
                                                        {
                                                            block: 'link',
                                                            url: '#',
                                                            mods: {'fa-icon': 'comments'},
                                                            content: 'n комментария'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'row',
                                                    content: {
                                                        block: 'link',
                                                        url: '#',
                                                        mods: {'fa-icon': 'file'},
                                                        content: 'n страница'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            content: '%projectname% с темой оформления'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            content: 'turquoise'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'right',
                            content: [
                                {
                                    block: 'lego'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

