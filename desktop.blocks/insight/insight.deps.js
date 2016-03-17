({
    mustDeps: [
        { block: 'insight', elem: 'head'},
        { block: 'insight', elem: 'body'},
        { block: 'insight', elem: 'bottom'},
        { block: 'link' }
    ],
    shouldDeps: [
        { block: 'text'},
        { block: 'table', elem: 'row' },
        { block: 'table', elem: 'col' },
        { block: 'link', mods:{ theme: 'turquoise', 'fa-icon': 'commentz' }},
        { block: 'link', mods:{ theme: 'turquoise', 'fa-icon': 'thumb-tack' }},
        { block: 'link', mods:{ theme: 'turquoise', 'fa-icon': 'file' }},
        { block: 'link', mods:{ type: 'inline', theme: 'turquoise'}}
    ]
})
