modules.define('edit', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function () {
                    var button = this.findBlocksInside('button');
                    var edit = this;
                    button[0].bindTo( 'pointerclick', function () {
                            edit.setMod( 'type', 'html' )
                    });

                    button[1].bindTo( 'pointerclick', function () {
                            edit.setMod( 'type', 'visual' )
                    });

                    console.log(edit.getMod( 'type'))
                }
            }
        }
    }))
});
