modules.define('edit', ['BEMHTML', 'strings__escape', 'i-bem__dom', 'jquery', 'publish'], function (provide, BEMHTML, escape, BEMDOM, $, Publish) {
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                'inited': function () {
                    var button = this.findBlocksInside('button');
                    var _this = this;

                    button[0].bindTo('pointerclick', function () {
                        _this.setMod(_this.findElem('formating'), 'type', '2');
                    });

                    button[1].bindTo('pointerclick', function () {
                        _this.setMod(_this.findElem('formating'), 'type', '1');
                    });

                    _this.setMod(_this.findElem('formating'), 'type', '1');

                    _this.bindTo('formating', 'pointerclick', function (e) {
                        if(e.currentTarget != e.target) {
                            console.log(Publish.test());
                        }
                    });
                }
            }
        },

        onElemSetMod: {
            'formating': {
                'type': {
                    '1': function (elem, modName, modVal, prevModVal) {
                        BEMDOM.update(elem,
                            BEMHTML.apply([
                                this.__self.map([
                                    ['boldd'],
                                    ['italic'],
                                    ['underline'],
                                    ['strikethrough', true],
                                    ['list-ul'],
                                    ['list-ol', true],
                                    ['outdent'],
                                    ['indent', true],
                                    ['align-left'],
                                    ['align-center'],
                                    ['align-justify'],
                                    ['align-right'],
                                    ['linkz'],
                                    ['chain-broken', true],
                                    ['picture-o']
                                ]),
                                {
                                    tag: 'br'
                                },
                                {
                                    block: 'select',
                                    mods: {mode: 'radio', theme: 'islands', size: 's'},
                                    val: 1,
                                    options: [
                                        {val: 1, text: 'Размер шрифта', disabled: true},
                                        {val: 2, text: '2^n'},
                                        {val: 3, text: '2^n'},
                                        {val: 4, text: '2^n'},
                                        {val: 5, text: '2^n'},
                                        {val: 6, text: '2^n'},
                                        {val: 7, text: '2^n'},
                                        {val: 8, text: '2^n'},
                                        {val: 9, text: '2^n'}
                                    ]
                                },
                                this.__self.map([
                                    ['copy'],
                                    ['cut'],
                                    ['clipboard', true],
                                    ['print'],
                                    ['fontz', true],
                                    ['superscript'],
                                    ['subscript', true],
                                    ['film'],
                                    ['tablez']
                                ])
                            ])
                        );
                    },
                    '2': function (elem, modName, modVal, prevModVal) {
                        BEMDOM.update(elem,
                            BEMHTML.apply(
                                this.__self.map([
                                    ['boldd'],
                                    ['italic'],
                                    ['underline'],
                                    'b-quote',
                                    ['strikethrough', true],
                                    'ins',
                                    'img',
                                    'ol',
                                    'ul',
                                    'li',
                                    'code',
                                    'поиск'
                                ])
                            )
                        )
                    }
                }
            }
        }
    }, {
        map: function (arr) {
            //var rst = [];
            return arr.map(function (item) {
                var rtn = {
                        block: 'button'
                    }

                if(typeof item == 'string'){
                    rtn.text = item;
                    rtn.js = {action: item};
                } else {
                    rtn.mods = {
                        'fa-icon': item[0],
                        type: item[1] ? 'delim' : ''
                    }
                    rtn.js = {action: item[0]};
                }
                return rtn
            })
        }
    }))
});
