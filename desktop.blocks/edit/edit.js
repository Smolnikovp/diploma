modules.define('edit', ['i-bem__dom'], function (provide, BEMDOM) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function () {
                    var button = this.findBlocksInside('button');
                    var _this = this;

                    button[0].bindTo('pointerclick', function () {
                        _this.setMod(_this.findElem('formating'), 'type', '2')
                    });

                    button[1].bindTo('pointerclick', function () {
                        _this.setMod(_this.findElem('formating'), 'type', '1')
                    });
                }
            }
        },
        onElemSetMod: {
            'formating': {
                'type': {
                    '1': function (elem, modName, modVal, prevModVal) {

                    },
                    '2': function (elem, modName, modVal, prevModVal) {

                    }
                }
            }
        }
    }))
});
