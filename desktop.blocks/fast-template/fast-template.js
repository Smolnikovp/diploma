modules.define('fast-template', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var fasttemplate = this;
                    var link = this.findBlockInside('link');
                    link.bindTo('pointerclick', function () {
                        (fasttemplate.getMod('open') == 'yes' && this.getMod('open') == 'yes') ? [
                            this.setMod('open', 'no') && fasttemplate.setMod('open', 'no')] : [
                            this.setMod('open', 'yes') && fasttemplate.setMod('open', 'yes')
                        ];
                    });
                }
            }
        }
    }))
});
