import {Image, ScrollView, Text, View, StyleSheet} from "react-native";
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import React, {Component, forwardRef, useImperativeHandle, useState} from "react";
// import anne from './assets/anne.jpg'

const assets = [require('./public/anne.jpg')]

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

export const  EvidenceScreen = forwardRef((props, ref) => {

    // const [items, setItems] = useState([]);
    //
    // useImperativeHandle(ref, () => ({
    //     addEvidence(item) {
    //         items.push(item)
    //         // this.props.updateMessages(items.length)
    //     }
    // }));
    
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView ref={ref => {
                    this.sv = ref;
                }} contentContainerStyle={{paddingVertical: 20}} onTouchStart={this.log}>
                    {props.items.map(({id, name, asset_name}) => (
                        <View style={{flex: 1,
                        flexDirection: 'column',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                            width:300
                            // width:'90vw',
                        }} key={Math.round(Math.random() * 1000000)}>
                            {/*<View style={{width:100}}>*/}
                                <Image source={assets[0]} style={{width:100}} alt={"hi"}/>
                            {/*</View>*/}
                            {/*<View style={{width:'50%'}}>*/}
                                <Text style={{width:100}}>
                                    {name}.
                                </Text>
                            {/*</View>*/}
                        </View>
                        // <Card mode={"contained"} style={{flex:1}}> 
                        //     {/*style={Styles.container}>*/}
                        //     <Card.Cover source={assets[0]} />
                        //             <Card.Content>
                        //                 <Paragraph>{name}</Paragraph>
                        //             </Card.Content>
                        //         <Card.Actions>
                        //         <Button>Add To Favourites</Button>
                        //         </Card.Actions>
                        //         </Card>
                    ))}
                </ScrollView>
            </View>
        );
})
