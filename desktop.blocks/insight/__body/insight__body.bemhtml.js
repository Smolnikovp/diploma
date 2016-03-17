block('insight').elem('body').content()(
    function(){
        return {
            block: 'table',
            content: [
                {
                    elem: 'col',
                    content: [
                        {
                            elem: 'row',
                            content: [
                                {
                                    block: 'link',
                                    url: '#',
                                    mods: {
                                        theme: 'turquoise',
                                        'fa-icon': 'thumb-tack'
                                    },
                                    content: 'n запись'
                                },
                                {
                                    block: 'link',
                                    url: '#',
                                    mods: {
                                        theme: 'turquoise',
                                        'fa-icon': 'commentz'
                                    },
                                    content: 'n комментария'
                                }
                            ]
                        },
                        {
                            elem: 'row',
                            content: {
                                block: 'link',
                                url: '#',
                                mods: {
                                    theme: 'turquoise',
                                    'fa-icon': 'file'
                                },
                                content: 'n страница'
                            }
                        }
                    ]
                }
            ]
        }
    }
)
