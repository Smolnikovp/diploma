modules.define('activity', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var activity = this;
                    var link = this.findBlockInside('link');
                    link.bindTo('pointerclick', function () {
                        (activity.getMod('open') == 'yes' && this.getMod('open') == 'yes') ? [
                            this.setMod('open', 'no') && activity.setMod('open', 'no')] : [
                            this.setMod('open', 'yes') && activity.setMod('open', 'yes')
                        ];
                    });
                }
            }
        }
    }))
});
