module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        {elem: 'meta', attrs: {name: 'description', content: ''}},
        {elem: 'css', url: 'index.min.css'}
    ],
    scripts: [{elem: 'js', url: 'index.min.js'}],
    content: {
        block: 'head',
        content: {
            block: 'layout',
            content: [
                {
                    elem: 'left',
                    content: 'Панель управления'
                },
                {
                    elem: 'right',
                    content: [
                        {
                            block: 'image',
                            attrs: {
                                src: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png',
                                width: '50px',
                                height: '50px'
                            }
                        },
                        {
                            elem: 'cms-name',
                            content: 'CMS on BEM'
                        }
                    ]
                },
                {
                    block: 'delimeter',
                    content: ''
                },
                {
                    block: 'menu',
                    mods: {type: 'left'},
                    content: [
                        {
                            elem: 'menu-item',
                            val: 1,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'Сайт'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 2,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'пользователи'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 3,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'меню'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 4,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'материалы'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 5,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'компоненты'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 6,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'расширения'
                            }
                        },
                        {
                            elem: 'menu-item',
                            val: 7,
                            mods: {type: 'link'},
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'справка'
                            }
                        }
                    ]
                },
                {
                    block: 'menu',
                    mods: {type: 'right'},
                    content: [
                        {
                            elem: 'menu-item',
                            val: 1,
                            content: [
                                {
                                    block: 'image',
                                    attrs: {
                                        src: '#'
                                    }
                                },
                                {
                                    block: 'text',
                                    url: '#',
                                    content: 'на сайте: 0'
                                }
                            ]
                        },
                        {
                            elem: 'menu-item',
                            val: 2,
                            content: [
                                {
                                    block: 'image',
                                    attrs: {
                                        src: '#'
                                    }
                                },
                                {
                                    block: 'text',
                                    url: '#',
                                    content: 'в панели: 1'
                                }
                            ]
                        },
                        {
                            elem: 'menu-item',
                            val: 3,
                            mods: {type: 'link'},
                            content: [
                                {
                                    block: 'image',
                                    attrs: {
                                        src: '#'
                                    }
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    content: '0'
                                }
                            ]
                        },
                        {
                            elem: 'menu-item',
                            val: 4,
                            mods: {type: 'link'},
                            content: [
                                {
                                    block: 'image',
                                    attrs: {
                                        src: '#'
                                    }
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    content: 'просмотр сайта'
                                }
                            ]
                        },
                        {
                            elem: 'menu-item',
                            val: 5,
                            mods: {type: 'link'},
                            content: [
                                {
                                    block: 'image',
                                    attrs: {
                                        src: '#'
                                    }
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    content: 'выйти'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};

