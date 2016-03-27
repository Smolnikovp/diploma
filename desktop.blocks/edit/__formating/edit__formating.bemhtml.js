block('edit').elem('formating').content()(
    function () {
        return this.mods ? [
            [
                {
                    mods: {'fa-icon': 'boldd'}
                },
                {
                    mods: {'fa-icon': 'italic'}
                },
                {
                    mods: {'fa-icon': 'underline'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'strikethrough'}
                },
                {
                    mods: {'fa-icon': 'list-ul'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'list-ol'}
                },
                {
                    mods: {'fa-icon': 'outdent'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'indent'}
                },
                {
                    mods: {'fa-icon': 'align-left'}
                },
                {
                    mods: {'fa-icon': 'align-center'}
                },
                {
                    mods: {'fa-icon': 'align-justify'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'align-right'}
                },
                {
                    mods: {'fa-icon': 'linkz'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'chain-broken'}
                },
                {
                    mods: {'fa-icon': 'picture-o'}
                }
            ].map(function (item) {
                return {
                    block: 'button',
                    mods: item.mods
                }
            }),
            {
                tag: 'br'
            },
            {
                block: 'select',
                mods: {mode: 'radio', theme: 'islands', size: 's'},
                val: 1,
                options: [
                    {val: 1, text: 'Размер шрифта', disabled: true},
                    {val: 2, text: '2^n'},
                    {val: 3, text: '2^n'},
                    {val: 4, text: '2^n'},
                    {val: 5, text: '2^n'},
                    {val: 6, text: '2^n'},
                    {val: 7, text: '2^n'},
                    {val: 8, text: '2^n'},
                    {val: 9, text: '2^n'}
                ]
            },
            [
                {
                    mods: {'fa-icon': 'copy'}
                },
                {
                    mods: {'fa-icon': 'cut'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'clipboard'}
                },
                {
                    mods: {'fa-icon': 'print'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'fontz'}
                },
                {
                    mods: {'fa-icon': 'superscript'}
                },
                {
                    mods: {type: 'delim', 'fa-icon': 'subscript'}
                },
                {
                    mods: {'fa-icon': 'film'}
                },
                {
                    mods: {'fa-icon': 'tablez'}
                }].map(function (item) {
                return {
                    block: 'button',
                    mods: item.mods
                }
            })
        ] : [
            {
                block: 'button',
                mods: { 'fa-icon': 'boldd'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'italic'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'underline'}
            },
            {
                block: 'button',
                text: 'b-quote'
            },
            {
                block: 'button',
                mods: { type: 'delim',  'fa-icon': 'strikethrough'}
            },
            {
                block: 'button',
                text: 'ins'
            },
            {
                block: 'button',
                text: 'img'
            },
            {
                block: 'button',
                text: 'ol'
            },
            {
                block: 'button',
                text: 'ul'
            },
            {
                block: 'button',
                text: 'li'
            },
            {
                block: 'button',
                text: 'code'
            },
            {
                block: 'button',
                text: 'поиск'
            }
        ]
    }
)
