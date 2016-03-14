block('groupbox').mod('type', 'default')(
    function(){
        this.ctx.text = 'Применить';
        this.ctx.options = [
            {val: 1, text: 'Изменить'},
            {val: 2, text: 'Удалить'},
            {val: 3, text: 'Сохранить'}
        ];

        return applyNext();
    }
);
