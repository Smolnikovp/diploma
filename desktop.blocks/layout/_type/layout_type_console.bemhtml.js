block('layout').mod( 'type', 'console').content()(
    function(){
        return [
            {
                elem: 'left',
                content: [
                    {
                        block: 'insight'
                    },
                    {
                        block: 'activity'
                    }
                ]
            },
            {
                elem: 'right',
                content: [
                    {
                        block: 'fast-template'
                    }
                ]
            }
        ]
    }
)
