block('edit').elem('body').content()(
    function(){
        return {
            block: 'textarea',
            placeholder: this.ctx.mods.note ?
                [
                'Введите текст заметки'
                ] : [
                'Здесь будет выведен текст'
            ]
        }
    }
)
