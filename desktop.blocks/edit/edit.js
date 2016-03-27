modules.define('edit', ['i-bem__dom'], function(provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function() {
                    var edit = this.findBlockInside('edit');
                    var radio = this.findBlockInside('radio-group');
                    var clicker = this.findBlockInside('edit__formating');
                    radio.bindTo('click', function() {
                        if (radio._val == 1){
                            edit.setMod ( 'type', 'visual' );
                        } else {
                            edit.setMod ( 'type', 'html' );
                        }

                        return console.log(clicker.getMod('type'));
                    });
                }
            }
        }
    }))
});
