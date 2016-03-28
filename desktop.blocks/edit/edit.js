modules.define('edit', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function () {
                    var button = this.findBlocksInside('button');
                    console.log(this);
                    var _this = this;
                    button[0].bindTo( 'pointerclick', function () {
                            console.log(arguments);
                            //this.findBlockOutside('edit').setMod( 'type', 'html' )
                    }, this);

                    button[1].bindTo( 'pointerclick', function () {
                            //this.findBlockOutside('edit').setMod( 'type', 'visual' )
                    });
                }
            }
        }
    }))
});
