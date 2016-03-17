({
    mustDeps: [
        { block: 'table' },
        { block: 'layout'},
        { block: 'control-group' },
        { block: 'groupbox', mods: { type: 'default'}},
        { block: 'groupbox', mods: { type: 'comments'}},
        { block: 'comments', elem: 'control-group'},
        { block: 'comments', elem: 'layout'},
        { block: 'comments', elem: 'table'}
    ]
})
