({
    mustDeps: [
        {block: 'welcome', elem: 'heading'},
        {block: 'welcome', elem: 'table'}
    ],
    shouldDeps: [
        {block: 'text'},
        {block: 'link'},
        {block: 'link', mods: {type: 'close'}},
        {block: 'link', mods: {type: 'open'}},
        {block: 'button', mods: {theme: 'turquoise', type: 'large'}},
        {block: 'table'},
        {block: 'table', elem: 'col'},
        {block: 'table', elem: 'row'}
    ]
})
