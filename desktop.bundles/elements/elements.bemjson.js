module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'elements.min.css'},
        {block: 'font-awesome'}
    ],
    scripts: [{elem: 'js', url: 'elements.min.js'}],
    content: [
        {
            block: 'article',
            mods: {type: 'elements'},
            content: [
                {
                    block: 'text',
                    mods: {type: 'heading-large'},
                    content: 'Элементы'
                },
                {
                    block: 'layout',
                    content: [
                        {
                            elem: 'left',
                            content: [
                                {
                                    block: 'menu',
                                    mods: {mode: 'radio-check', focused: true},
                                    val: 1,
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium'},
                                            content: 'Выберите элемент'
                                        },
                                        {
                                            block: 'menu-item',
                                            val: 1,
                                            content: '1'
                                        },
                                        {
                                            block: 'menu-item',
                                            val: 2,
                                            content: '2'
                                        },
                                        {
                                            block: 'menu-item',
                                            content: '3'
                                        },
                                        {
                                            block: 'menu-item',
                                            content: '4'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'right',
                            content: [
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
                                                    val: 2,
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
