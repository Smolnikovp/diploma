block('groupbox').mod({ type: 'comments' }).block('select').content()(
    function(){
        this.ctx.options = [
            {val: 1, text: 'Все типы комментариев', disabled: true},
            {val: 2, text: 'Важные'},
            {val: 3, text: 'Личные'},
            {val: 4, text: 'etc.'}
        ];

        return this.ctx;
    }
);
//
//block('groupbox').mod({ type: 'comments' }).block('button').content()(
//    function(){
//        this.ctx.text = 'Фильтр';
//        return this.ctx;
//    }
//);
