modules.define('fast-template', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var fasttemplate = this;
                    var link = this.findBlockInside('link');
                    link.setMod( 'type', 'open');
                    fasttemplate.setMod( 'type', 'open');
                    link.bindTo('pointerclick', function () {
                        (fasttemplate.getMod('type') == 'open' && this.getMod('type') == 'open') ? [
                            this.setMod('type', 'close') && fasttemplate.setMod('type', 'close')] : [
                            this.setMod('type', 'open') && fasttemplate.setMod('type', 'open')
                        ];
                    });
                }
            }
        }
    }))
});
