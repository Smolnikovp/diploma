modules.define('insight', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var insight = this;
                    var link = this.findBlockInside('link');
                    link.setMod( 'type', 'open');
                    insight.setMod( 'type', 'open');
                    link.bindTo('pointerclick', function () {
                        (insight.getMod('type') == 'open' && this.getMod('type') == 'open') ? [
                            this.setMod('type', 'close') && insight.setMod('type', 'close')] : [
                            this.setMod('type', 'open') && insight.setMod('type', 'open')
                        ];
                    });
                }
            }
        }
    }))
});
