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
                    block: 'button',
                    mods: { type: 'html' },
                    text: 'HTML'
                },
                {
                    block: 'button',
                    mods: { type: 'visual', focused: true },
                    text: 'Визуально'
                }
            ]
        }
    )
)
