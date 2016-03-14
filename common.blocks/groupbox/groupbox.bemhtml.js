block('groupbox').content()(function () {
        return [
            {
                block: 'select',
                mods: {mode: 'radio', theme: 'islands', size: 'm'},
                val: 1,
                options: [
                    {val: 1, text: 'Изменить'},
                    {val: 2, text: 'Удалить'},
                    {val: 3, text: 'Сохранить'}
                ]
            },
            {
                block: 'button',
                mods: {theme: 'grey'},
                text: 'Применить'
            }
        ]
    }
);
