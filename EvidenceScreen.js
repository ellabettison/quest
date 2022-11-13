import {Image, ScrollView, Text, View} from "react-native";
import React, {Component} from "react";

class EvidenceScreen extends Component{
    state={
        items: [
            {
                key: 1,
                name: "Photo where victim was last spotted",
                uri: {uri: 'https://i.imgur.com/RpEnswm.png'},
                url: "https://unsplash.com/photos/C9t94JC4_L8"
            },
        ],
        unseenMessages:0
    }
    
    addItem(item){
        this.state.items.push(item)
        this.props.updateMessages(this.state.items.length)
    }
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView ref={ref => {
                    this.sv = ref;
                }} contentContainerStyle={{paddingVertical: 20}} onTouchStart={this.log}>
                    {this.state.items.map(({name, uri, url, key}) => (
                        <View key={key}>
                            <Image source={uri} style={{height: 300, aspectRatio: 1}}/>
                            <Text style={{marginBottom: 10}}>
                                {name}.
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default EvidenceScreen