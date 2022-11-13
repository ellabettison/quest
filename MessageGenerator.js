export const user = {
    _id: 1,
    name: 'Developer',
}

export const detective = {
    _id: 2,
    name: 'Detective',
    avatar: 'https://i.imgur.com/wWIisPe.png',
}

export function createMultichoiceMessage(text, choices){
    return {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        quickReplies: {
            type: 'radio', // or 'checkbox',
            keepIt: false,
            values: choices,
        },
        user: detective,
    }
}

export function createMessage(text){
    return {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: detective,
    }
}

export function createImageMessage(text, image_url){
    return {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        image: 'https://facebook.github.io/react/img/logo_og.png',
        user: detective,
    }
}