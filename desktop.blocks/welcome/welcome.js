modules.define('welcome', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var welcome = this;
                    var link = this.findBlockInside('link');
                    link.setMod( 'type', 'open');
                    link.bindTo('pointerclick', function () {
                        this.setMod('type', this.getMod('type') == 'close' ? 'open' : 'close');
                        welcome.setMod( 'type', 'close');
                    });
                }
            }
        }
    }))
});
