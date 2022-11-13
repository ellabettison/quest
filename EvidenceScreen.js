import {Image, Text, View} from "react-native";
import React from "react";

function EvidenceScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView ref={ref => {this.sv = ref;}} contentContainerStyle={{ paddingVertical: 20 }} onTouchStart={this.log}>
                {images.map(({ name, uri, url, key }) => (
                    <View key={key}>
                        <Image source={uri} style={{height: 300, aspectRatio: 1}}/>
                        <Text style={{ marginBottom: 10 }}>
                            Photo by {name}.
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}