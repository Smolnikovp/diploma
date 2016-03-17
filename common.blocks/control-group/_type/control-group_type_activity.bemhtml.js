block('control-group').mod( 'type', 'activity').content()(
    function(){
        return [
            {
                block: 'button',
                mods: {theme: 'islands', size: 'm'},
                text: 'Все'
            },
            {
                block: 'button',
                mods: {theme: 'islands', size: 'm'},
                text: 'Ожидающие (0)'
            },
            {
                block: 'button',
                mods: {theme: 'islands', size: 'm'},
                text: 'Одобренные'
            },
            {
                block: 'button',
                mods: {theme: 'islands', size: 'm'},
                text: 'Спам'
            },
            {
                block: 'button',
                mods: {theme: 'islands', size: 'm'},
                text: 'Корзина (0)'
            }
        ]
    }
)
