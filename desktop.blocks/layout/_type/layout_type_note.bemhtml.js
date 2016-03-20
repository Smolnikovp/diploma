block('layout').mod( 'type', 'note').content()(
    function() {
        return [
            {
                elem: 'left',
                content: [
                    {
                        block: 'header-input'
                    },
                    {
                        block: 'edit'
                    }
                ]
            },
            {
                elem: 'right',
                content: [
                    {
                        block: 'publish',
                        mods: { note: true }
                    },
                    {
                        block: 'rubric'
                    }
                ]
            }
        ]
    }
)
