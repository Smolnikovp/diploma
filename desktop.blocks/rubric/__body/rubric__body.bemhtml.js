block('rubric').elem('body').content()(
    function(){
        return [
            {
                block: 'radio-group',
                mods: { type: 'button', theme: 'islands', size: 'l' },
                val: 1,
                options: [
                    { val: 1, text: 'Все рубрики' },
                    { val: 2, text: 'Часто используемые' }
                ]
            },
            {
                block : 'checkbox-group',
                mods : { theme : 'islands', size : 'm' },
                options : [
                    { val : 1, text : 'Без рубрики' },
                    { val : 2, text : 'Популярные' },
                    { val : 3, text : 'Новости' }
                ]
            }
        ]
    }
)
