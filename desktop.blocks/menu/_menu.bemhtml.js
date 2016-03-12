block('menu')(
    tag()('ul'),
    content()(function() {
        var content = this.ctx.content;

        return content.map(function(item) {
            return {
                elem: 'item',
                content: {
                    block: 'link',
                    url: item.url,
                    mix: {
                        block: 'menu',
                        elem: 'link'
                    },
                    content: item.content
                }
            };
        });
    })
)

block('menu').elem('item')(
    tag()('li')
)
