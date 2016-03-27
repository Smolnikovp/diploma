block('welcome')(
    js()(true),
    def()(function(){
        var mods = this.mods;

        mods.open = mods.open ? mods.open : 'yes';

        return applyNext();
    }),
    content()(
        function () {
            return [
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
                            mods: {'fa-icon': 'times-circle', theme: 'turquoise', open: this.mods.open},
                            content: 'Закрыть'
                        }
                    ]
                },
                {
                    block: 'text',
                    mix: {block: 'welcome', elem: 'description-text'},
                    content: 'Мы собрали несколько ссылок для Вашего удобства:'
                },
                {
                    block: 'table',
                    mix: {block: 'welcome', elem: 'table'},
                    content: [
                        {
                            elem: 'col',
                            content: [
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium'},
                                            content: 'Для начала'
                                        },
                                        {
                                            block: 'button',
                                            mods: {theme: 'turquoise', type: 'large'},
                                            content: {
                                                block: 'link',
                                                url: '../../desktop.bundles/options/options.html',
                                                content: 'Настройте свой сайт'
                                            }

                                        },
                                        {
                                            block: 'text',
                                            content: 'или'
                                        },
                                        {
                                            block: 'link',
                                            mods: {type: 'inline', theme: 'turquoise'},
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
                                            mods: {type: 'heading-medium'},
                                            content: 'Следующие шаги'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'file-text'},
                                            content: 'Напишите свою первую запись'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'pencil-square-o'},
                                            content: 'Создайте запись &#171;обо мне&#187;'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'eye'},
                                            content: 'Просмотрите свой сайт'
                                        }
                                    ]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                        {
                                            block: 'text',
                                            mods: {type: 'heading-medium'},
                                            content: 'Другие действия'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'cogs'},
                                            content: 'Настройте виджеты и меню'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'commentz'},
                                            content: 'Включите или выключите комментарии'
                                        },
                                        {
                                            block: 'link',
                                            url: '#',
                                            mods: {theme: 'turquoise', 'fa-icon': 'wrench'},
                                            content: 'Узнайте больше о %projectname%'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    )
);
