({
    mustDeps: [
        { block: 'publish', elem: 'head'},
        { block: 'publish', elem: 'buttons'},
        { block: 'publish', elem: 'body'},
        { block: 'publish', elem: 'bottom'}
    ],
    shouldDeps: [
        { block: 'button' },
        { block: 'button', mods: { theme: 'red'}},
        { block: 'button', mods: { theme: 'turquoise'}}
    ]
})
