block('groupbox').mod('type', 'comments')(
    function(){
        this.ctx.text = 'Фильтр';
        this.ctx.options = [
            {val: 1, text: 'Все типы комментариев', disabled: true},
            {val: 2, text: 'Важные'},
            {val: 3, text: 'Личные'},
            {val: 4, text: 'etc.'}
        ];

        return applyNext();
    }
);
