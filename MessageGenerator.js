import anne from './public/anne.jpg'
import magnifier from './assets/magnifier.png'
import {Image} from "react-native";

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

// export function createImageMessage(text, image_id){
//     return {
//         _id: Math.round(Math.random() * 1000000),
//         text: text,
//         createdAt: new Date(),
//         // image:book,
//         renderMessageImage:() =>{ return <Image source={book}/>},
//         imageProps: {src:book, source:book},
//         user: detective,
//     }
// }