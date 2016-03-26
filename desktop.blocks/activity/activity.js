modules.define('activity', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var activity = this;
                    var link = this.findBlockInside('link');
                    link.setMod( 'type', 'open');
                    activity.setMod( 'type', 'open');
                    link.bindTo('pointerclick', function () {
                        (activity.getMod('type') == 'open' && this.getMod('type') == 'open') ? [
                            this.setMod('type', 'close') && activity.setMod('type', 'close')] : [
                            this.setMod('type', 'open') && activity.setMod('type', 'open')
                        ];
                    });
                }
            }
        }
    }))
});
