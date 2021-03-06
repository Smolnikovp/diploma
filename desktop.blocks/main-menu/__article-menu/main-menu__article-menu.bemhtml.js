block('main-menu').elem('article-menu').content()(
    function () {
        return [
            {
                block: 'menu',
                content: [
                    {
                        elem: 'menu-item',
                        val: 1,
                        content: {
                            block: 'link',
                            mods: {'fa-icon': 'tachometer'},
                            url: '../console/console.html',
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
                            url: '../note/note.html',
                            content: 'Записи'
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 5,
                        content: {
                            block: 'link',
                            mods: {'fa-icon': 'file'},
                            url: '../pages/pages.html',
                            content: 'Страницы'
                        }
                    },
                    {
                        elem: 'menu-item',
                        val: 6,
                        content: {
                            block: 'link',
                            mods: {'fa-icon': 'commentz'},
                            url: '../comments/comments.html',
                            content: 'Комментарии'
                        }
                    }
                ]
            }
        ]
    }
)
