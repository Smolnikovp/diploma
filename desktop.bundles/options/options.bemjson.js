module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'options.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'options.min.js'}],
    content: [
        {
            block: 'article',
            mods: {type: 'options'},
            content: [
                {
                    block: 'text',
                    tag: 'span',
                    mods: {type: 'heading-large', 'fa-icon': 'cogs'},
                    content: 'Общие настройки'
                },
                {
                    block: 'table',
                    content: [
                        {
                            elem: 'col',
                            content: [
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Название сайта'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'input',
                                        mods: {type: 'small'},
                                        placeholder: 'Введите название сайта'
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
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Краткое описание'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'textarea',
                                            placeholder: 'Введите описание'
                                        },
                                        {
                                            block: 'text',
                                            mods: {type: 'description'},
                                            content: 'Опишите в двух словах, о чём этот сайт'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'table',
                    content: [
                        {
                            elem: 'col',
                            content: [
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Адрес сайта'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'input',
                                        mods: {type: 'small'},
                                        placeholder: 'Введите адрес сайта'
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
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Адрес электронной почты (e-mail)'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'input',
                                            mods: {type: 'small'},
                                            placeholder: 'Введите e-mail'
                                        },
                                        {
                                            block: 'text',
                                            mods: {type: 'description'},
                                            content: 'Адрес будет использоваться в целях администрирования. Например, для уведомления о новых пользователях'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'table',
                    content: [
                        {
                            elem: 'col',
                            content: [
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            content: 'Членство'
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'checkbox',
                                            mods: {theme: 'islands', size: 'm'}
                                        },
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            content: 'Любой может зарегестрироваться'
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
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            content: 'Роль нового пользователя'
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'select',
                                        mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                        val: 1,
                                        options: [
                                            {val: 1, text: 'Посетитель'},
                                            {val: 2, text: 'Администратор'},
                                            {val: 3, text: 'Модератор'}
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'table',
                    content: [
                        {
                            elem: 'col',
                            content: [
                                {
                                    elem: 'row',
                                    content: {
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Часовой пояс'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'UTC+12'},
                                                {val: 2, text: 'UTC-12'},
                                                {val: 3, text: 'UTC 0'}
                                            ]
                                        },
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            mods: {type: 'description'},
                                            content: 'Выберите нужный Вам часовой пояс'
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
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Формат даты'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'radio-group',
                                            val: 1,
                                            mods: {focused: true},
                                            options: [
                                                {val: 1, text: '02/09/2009'},
                                                {val: 2, text: '09/02/2009'},
                                                {val: 3, text: '02.09.2009'},
                                                {val: 4, text: '2009/09/02'}
                                            ]
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
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Формат времени'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'radio-group',
                                            val: 1,
                                            mods: {focused: true},
                                            options: [
                                                {val: 1, text: '24 часа'},
                                                {val: 2, text: '12 часов'}
                                            ]
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
                                        block: 'text',
                                        tag: 'span',
                                        content: 'Первый день недели'
                                    }
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'select',
                                            mods: {mode: 'radio', theme: 'islands', size: 'm'},
                                            val: 1,
                                            options: [
                                                {val: 1, text: 'Понедельник'},
                                                {val: 2, text: 'Вторник'},
                                                {val: 3, text: 'Среда'},
                                                {val: 3, text: 'Четверг'},
                                                {val: 3, text: 'Пятница'},
                                                {val: 3, text: 'Суббота'},
                                                {val: 3, text: 'Воскресенье'}
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
