block('account-info').content()(
    function(){
        return [
            {
                block: 'image',
                url: '../../img/user-1.png'
            },
            {
                block: 'text',
                content: '%username%'
            },
            {
                block: 'link',
                url: '=content',
                mods: {theme: 'turquoise'},
                content: 'qwerty@gmail.com'
            },
            {
                block: 'link',
                mods: {theme: 'turquoise'},
                content: 'IP address'
            }
        ]
    }
)
