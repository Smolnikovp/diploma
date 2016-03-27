({
    mustDeps: [
        { block: 'activity', elem: 'head'},
        { block: 'activity', elem: 'recently-add'},
        { block: 'activity', elem: 'body'},
        { block: 'activity', elem: 'bottom'}
    ],
    shouldDeps: [
        { block: 'link', mods:{ type: 'inline', theme: 'turquoise' }},
        { block: 'link', mods:{ open: 'yes' }},
        { block: 'link', mods:{ open: 'no' }}
    ]
})
