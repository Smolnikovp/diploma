({
    mustDeps: [
        {block: 'welcome', elem: 'heading'},
        {block: 'welcome', elem: 'table'}
    ],
    shouldDeps: [
        {block: 'text'},
        {block: 'link'},
        {block: 'link', mods: {type: 'close'}},
        {block: 'button', mods: {theme: 'turquoise', type: 'large'}},
        {block: 'table'},
        {block: 'table', elem: 'col'},
        {block: 'table', elem: 'row'}
    ]
})
