block('groupbox').content()(function (){
        return [
            {
                block: 'select',
                mods: {mode: 'radio', theme: 'islands', size: 'm'},
                mix: {block: 'groupbox', elem: 'select'},
                val: 1,
                options: this.ctx.options || [{}]
            },
            {
                block: 'button',
                mods: {theme: 'grey'},
                text: this.ctx.text || 'text'
            }
        ]
    }
);
