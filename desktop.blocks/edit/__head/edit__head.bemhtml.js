block('edit').elem('head')(
    content()(
        function(){
            return [
                {
                    block: 'text',
                    content: 'Загрузить/вставить'
                },
                {
                    block: 'link',
                    mods: { 'fa-icon': 'list-alt' }
                },
                {
                    block: 'link',
                    mods: { 'fa-icon': 'video-camera' }
                },
                {
                    block: 'link',
                    mods: { 'fa-icon': 'music' }
                },
                {
                    block: 'link',
                    mods: { 'fa-icon': 'star' }
                },
                {
                    block: 'radio-group',
                    mods: { type: 'button', theme: 'islands', size: 'l' },
                    val: 1,
                    options: [
                        {val: 1, text: 'Визуально' },
                        {val: 2, text: 'HTML' }
                    ]
                }
            ]
        }
    )
)
