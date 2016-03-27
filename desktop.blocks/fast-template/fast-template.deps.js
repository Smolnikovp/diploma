({
    mustDeps: [
        { block: 'fast-template', elem: 'head'},
        { block: 'fast-template', elem: 'body'}
    ],
    shouldDeps: [
        { block: 'text', mods: {type: 'heading-medium', 'fa-icon': 'caret-up'}},
        { block: 'textarea' },
        { block: 'input', mods: {type: 'medium'}},
        { block: 'button', mods: {theme: 'turquoise', type: 'medium'}},
        { block: 'link', mods:{ open: 'yes' }},
        { block: 'link', mods:{ open: 'no' }}
    ]
})
