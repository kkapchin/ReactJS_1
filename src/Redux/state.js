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
            {id: 1, name: 'Мадарыч', img: 'https://f4.bcbits.com/img/a3103636681_10.jpg'},
            {id: 2, name: 'Bloody', img: 'https://avatars.mds.yandex.net/get-zen_doc/177006/pub_5c57346b22d89d00adadb82c_5c57431d25d7b000b1b3af07/scale_1200'},
            {id: 3, name: 'Dedist', img: 'https://pbs.twimg.com/media/DjaQvzwU8AAuz-P.jpg'},
            {id: 4, name: 'Ferich', img: 'https://i.pinimg.com/originals/39/a3/3c/39a33c5f178998cc05dce0e4d564f66a.jpg'}
        ]
    },

    sidebar: {

        navbar: [
            {path: '/profile', title: 'Profile'},
            {path: '/dialogs', title: 'Messenger'},
            {path: '/news', title: 'News'},
            {path: '/projects', title: 'Projects'},
            {path: '/settings', title: 'Settings'}
        ],

        friendlist: [
            {id: 1, name: 'Мадарыч', img: 'https://f4.bcbits.com/img/a3103636681_10.jpg'},
            {id: 2, name: 'Bloody', img: 'https://avatars.mds.yandex.net/get-zen_doc/177006/pub_5c57346b22d89d00adadb82c_5c57431d25d7b000b1b3af07/scale_1200'},
            {id: 3, name: 'Dedist', img: 'https://pbs.twimg.com/media/DjaQvzwU8AAuz-P.jpg'},
            {id: 4, name: 'Ferich', img: 'https://i.pinimg.com/originals/39/a3/3c/39a33c5f178998cc05dce0e4d564f66a.jpg'}
        ]
    }

}

export default state;
