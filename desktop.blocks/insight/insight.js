modules.define('insight', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var insight = this;
                    var link = this.findBlockInside('link');
                    link.bindTo('pointerclick', function () {
                        (insight.getMod('open') == 'yes' && this.getMod('open') == 'yes') ? [
                            this.setMod('open', 'no') && insight.setMod('open', 'no')] : [
                            this.setMod('open', 'yes') && insight.setMod('open', 'yes')
                        ];
                    });
                }
            }
        }
    }))
});
