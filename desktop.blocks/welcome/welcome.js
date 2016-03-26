modules.define('welcome', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    //console.log(
                    //    this.findElem('heading')
                    //)
                    //console.log(
                    //
                    //)
                    this.findBlockInside('link').bindTo('pointerclick', function () {
                        console.log(this)
                    });
                }
            }
        }
    }))
});
