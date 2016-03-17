({
    mustDeps: [
        { block: 'table', elem: 'comment' },
        { block: 'table', elem: 'head' },
        { block: 'table', elem: 'content' }
    ],
    shouldDeps:[
        { block: 'link', mods: { type: 'inline', theme: 'turquoise' }},
        { block: 'checkbox', mods: { theme: 'islands', size: 'l'}},
        { block: 'account-info' },
        { block: 'table', elem: 'head' },
        { block: 'table', elem: 'row' },
        { block: 'table', elem: 'col' },
        { block: 'text'}
    ]
})
