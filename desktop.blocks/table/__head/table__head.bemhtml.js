block('table').elem('head').content()(
    function(){
        return {
            elem: 'col',
            content: [
                {
                    elem: 'row',
                    content: {
                        block: 'checkbox',
                        mods: {theme: 'islands', size: 'l'}
                    }
                },
                {
                    elem: 'row',
                    content: {
                        block: 'text',
                        content: 'Автор'
                    }
                },
                {
                    elem: 'row',
                    content: {
                        block: 'text',
                        content: 'Комментарий'
                    }
                }
            ]
        }
    }
);
