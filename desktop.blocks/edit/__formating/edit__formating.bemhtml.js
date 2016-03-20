block('edit').elem('formating').content()(
    function(){
        return [
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
                mods: { type: 'delim', 'fa-icon': 'strikethrough'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'list-ul'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'list-ol'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'outdent'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'indent'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'align-left'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'align-center'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'align-justify'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'align-right'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'linkz'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'chain-broken'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'picture-o'}
            },
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
            {
                block: 'button',
                mods: { 'fa-icon': 'copy'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'cut'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'clipboard'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'print'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'fontz'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'superscript'}
            },
            {
                block: 'button',
                mods: { type: 'delim', 'fa-icon': 'subscript'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'film'}
            },
            {
                block: 'button',
                mods: { 'fa-icon': 'tablez'}
            }

        ]
    }
)
