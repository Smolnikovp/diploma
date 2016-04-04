modules.define('publish', ['BEMHTML', 'strings__escape', 'i-bem__dom', 'jquery'], function (provide, BEMHTML, escape, BEMDOM, $) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function () {
                }
            }
        }
    },{
        test: function () {
            console.log('111222')
        }
    }))
});
