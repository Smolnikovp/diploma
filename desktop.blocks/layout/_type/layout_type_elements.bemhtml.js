block('layout').mod( 'type', 'elements').content()(
    function(){
        return [
            {
                elem: 'left',
                content: {
                    block : 'radio-group',
                    mods : { theme : 'islands', size : 'm', type : 'button' },
                    val: 1,
                    options : [
                        { val : 1, text : 'Новости' },
                        { val : 2, text : 'Заметки' },
                        { val : 3, text : 'Слой' }
                    ]
                }
            },
            {
                elem: 'right',
                content: [
                    {
                        block: 'edit',
                        mods: { note: false }
                    }
                ]
            }
        ]
    }
)
