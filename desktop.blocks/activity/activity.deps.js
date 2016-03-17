({
    mustDeps: [
        { block: 'activity', elem: 'head'},
        { block: 'activity', elem: 'recently-add'},
        { block: 'activity', elem: 'body'},
        { block: 'activity', elem: 'bottom'}
    ],
    shouldDeps: [
        { block: 'table'},
        { block: 'table', elem: 'row' },
        { block: 'table', elem: 'col' },
        { block: 'image'},
        { block: 'link', mods:{ type: 'inline', theme: 'turquoise'}},
        { block: 'control-group', mods: {type: 'activity'}}
    ]
})
