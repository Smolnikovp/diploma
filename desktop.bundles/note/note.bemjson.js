module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'note.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'note.min.js'}],
    content: [
        {
            block: 'article',
            mods: {type: 'note'},
            content: [
                {
                    block: 'text',
                    tag: 'span',
                    mods: {'fa-icon': 'thumb-tack', type: 'heading-large'},
                    content: 'Записи'
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'input',
                                    mods: {type: 'large'},
                                    placeholder: 'Введите заголовок'
                                },
                                {
                                    block: 'inline',
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            mods: {theme: 'bold'},
                                            content: 'Постоянная ссылка:'
                                        },
                                        {
                                            block: 'link',
                                            url: '=content',
                                            mods: {type: 'inline'},
                                            content: 'https://github.com'
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'grey', type: 'radius'},
                                            text: 'Изменить постоянные ссылки'
                                        }
                                    ]
                                },
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            elem: 'head',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Загрузить/вставить'
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'list-alt'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'video-camera'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'music'}
                                                },
                                                {
                                                    block: 'link',
                                                    mods: {type: 'inline', 'fa-icon': 'star'}
                                                },
                                                {
                                                    block: 'radio-group',
                                                    val: 1,
                                                    mods: {theme: 'grey', type: 'button', focused: true},
                                                    options: [
                                                        {val: 1, text: 'Визуально'},
                                                        {val: 2, text: 'HTML'}
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'body',
                                            content: [
                                                {
                                                    block: 'inline',
                                                    mods: {type: 'text-format'},
                                                    content: [
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'boldd'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'italic'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'underline'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white', 'fa-icon': 'strikethrough'}
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'b-quote'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'img'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'ul'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'ol'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'li'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'code'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'more'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'поиск'
                                                        },
                                                        {
                                                            block: 'button',
                                                            mods: {theme: 'white'},
                                                            text: 'закрыть теги'
                                                        }
                                                    ]
                                                },
                                                {
                                                    block: 'textarea',
                                                    placeholder: 'Введите текст'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'bottom',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Количество слов: n'
                                                },
                                                {
                                                    block: 'text',
                                                    mods: {side: 'right'},
                                                    tag: 'span',
                                                    content: 'Черновик сохранен в DateTime'
                                                }

                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'center'
                        },
                        {
                            elem: 'right',
                            content: [
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            tag: 'span',
                                            mods: {type: 'heading-medium', theme: 'bold'},
                                            content: 'Опубликовать'
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {type: 'radius', side: 'left', theme: 'grey'},
                                                    text: 'Сохранить'
                                                },
                                                {
                                                    block: 'button',
                                                    mods: {type: 'radius', side: 'right', theme: 'grey'},
                                                    text: 'Опубликовать'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Статус:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Черновик'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    content: 'Видимость:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Открыто'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'inline',
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {'fa-icon': 'calendar'},
                                                    tag: 'span',
                                                    content: 'Опубликовать:'
                                                },
                                                {
                                                    block: 'text',
                                                    tag: 'span',
                                                    mods: {theme: 'bold'},
                                                    content: 'Сразу'
                                                },
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'turquoise'},
                                                    content: 'Изменить'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'bottom',
                                            content: [
                                                {
                                                    block: 'link',
                                                    url: '#',
                                                    mods: {type: 'inline', theme: 'red'},
                                                    content: 'Удалить'
                                                },
                                                {
                                                    block: 'button',
                                                    mods: {theme: 'turquoise', type: 'small', side: 'right'},
                                                    content: 'Опубликовать'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'lego',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium', theme: 'bold'},
                                            content: 'Рубрики'
                                        },
                                        {
                                            elem: 'body',
                                            content: [
                                                {
                                                    block: 'radio-head',
                                                    content: {
                                                        block: 'radio-group',
                                                        val: 1,
                                                        mods: {theme: 'grey', type: 'button', focused: true},
                                                        options: [
                                                            {val: 1, text: 'Все рубрики'},
                                                            {val: 2, text: 'Часто используемые'}
                                                        ]
                                                    }
                                                },
                                                {
                                                    block: 'radio-body',
                                                    content: {
                                                        block: 'radio-group',
                                                        val: 1,
                                                        mods: {focused: true},
                                                        options: [
                                                            {val: 1, text: 'Без рубрики'},
                                                            {val: 2, text: 'Увлечения'},
                                                            {val: 3, text: 'Прочее'}
                                                        ]
                                                    }
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
        }
    ]
};
