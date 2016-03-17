block('table').elem('content').content()(
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
                        block: 'account-info'
                    }
                },
                {
                    elem: 'row',
                    content: {
                        elem: 'comment'
                    }
                }
            ]
        }
    }
)
