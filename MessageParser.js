import {createMessage} from "./MessageGenerator";

export function parse( message, onReceive) {
    console.log(message[0]['text'])
    console.log(message[0]['_id'])

    // POST
    fetch('http://192.168.1.169:5000/hello', {

        // Declare what type of data we're sending
        headers: {
            'Content-Type': 'application/json'
        },
        // Specify the method
        method: 'POST',
        // A JSON payload
        body: JSON.stringify({
            "greeting": message[0]['text']
        })
    }).then( (response) => { // At this point, Flask has printed our JSON

        console.log('got response '+ response);
        return response.text();

    }).then( (text) => {

        console.log('POST response: ' + text)
        // Should be 'OK' if everything was successful
        // this.actionProvider.say(text)
        // const message = [text];
        const new_message  = [
            createMessage(text)
        ]
        onReceive(new_message);
    });

}