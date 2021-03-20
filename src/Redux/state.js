let state = {

    profilePage: {
        posts: [
            {id: 3, message: 'qq yopta', likesCount: 1},
            {id: 2, message: 'All cops are bitches', likesCount: 666},
            {id: 1, message: 'Hello world', likesCount: 13},
        ]
    },

    messagesPage: {

        messages: [
            {id: 1, message: 'Zdarowa bichixi'},
            {id: 2, message: 'qq yopta'},
            {id: 3, message: 'Just Fun'},
            {id: 4, message: 'Prevet'},
        ],

        dialogs: [
            {id: 1, name: 'Madarka'},
            {id: 2, name: 'Bloody'},
            {id: 3, name: 'Dedist'},
            {id: 4, name: 'Ferich'}
        ]
    },

    sidebar: {
        navbar: [
            {path: '/profile', title: 'Profile'},
            {path: '/dialogs', title: 'Messenger'},
            {path: '/news', title: 'News'},
            {path: '/projects', title: 'Projects'},
            {path: '/settings', title: 'Settings'}
        ]
    }
}

export default state;
