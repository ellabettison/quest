import {Image, ScrollView, View, StyleSheet} from "react-native";
import React, {Component, forwardRef, useImperativeHandle, useState} from "react";
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
// import anne from './assets/anne.jpg'

const assets = [require('./public/anne.jpg')]

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height


export const  EvidenceScreen = ({items}) => {
    
        return (
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView ref={ref => {
                        this.sv = ref;
                    }} contentContainerStyle={{paddingVertical: 20}} onTouchStart={this.log}>
                        {items.map(({id, name, asset_name}) => (
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
                </Layout>
        );
}
