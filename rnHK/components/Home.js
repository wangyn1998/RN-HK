import React, { Component } from 'react';
import {Icon, Button} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    StatusBar
  } from 'react-native';


const styles = StyleSheet.create({
    search:{
    height:50,
    width:'100%',
    backgroundColor:'#f23030',
    flexDirection:'row'
    },
    searchBar:{
        height:40,
        width:'85%',
        backgroundColor:"#fbb8b8",
        borderRadius:30,
        marginTop:5,
        marginLeft:'5%',
        flexDirection:'row'
    },
    simg:{
        marginTop:10,
        marginLeft:10,
    },
    shoppingCar:{
        width:50,
        color:'white',
        marginLeft:'15%',
        marginTop:8
    },
    wrapper:{
        height:220,
        width:"100%"
    },
    body:{
        height:600,
        backgroundColor:"#f5f5f5",
    },
    bodybar:{
        height:90,
        width:"97%",
        flexDirection:'row',
        backgroundColor:'#ffffff',
        marginTop:8,
        marginLeft:'1%'
    },
    imgborder1:{
        marginLeft:10,
        height:80,
        width:80,
        borderRadius:45,
        marginTop:5,
        backgroundColor:'#ffcccc'
    },
    imgborder2:{
        marginLeft:10,
        height:80,
        width:80,
        borderRadius:45,
        marginTop:5,
        backgroundColor:'#ffe1b1'
    },
    imgborder3:{
        marginLeft:10,
        height:80,
        width:80,
        borderRadius:45,
        marginTop:5,
        backgroundColor:'#bfe6a8'
    },
    imgborder4:{
        marginLeft:10,
        height:80,
        width:80,
        borderRadius:45,
        marginTop:5,
        backgroundColor:'#c3ddf2'
    },
    img:{
        marginTop:15,
        marginLeft:15
    },
    bodytxt:{
        marginTop:32,
        marginLeft:50,
        fontSize:20,
        color:"#333333"
    },
    bodyicon:{
        marginTop:40,
        marginLeft:"35%"
    },
    button:{
        width:'85%',
        height:40,
        backgroundColor:'#f23030',
        borderRadius:10,
        marginTop:20,
        marginLeft:'8%',
        color:'#ffffff'
    },
    txt:{
        fontSize:12,
        color:"#767676",
        marginTop:30,
        marginLeft:"38%"
    }
})

export default class Home extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <StatusBar backgroundColor="red"/>
                    <View style={styles.search} >
                        <View  style={styles.searchBar}>
                            <View style={styles.simg}>
                                <Icon name ='search'style={{color:'white'}}></Icon>
                            </View>
                            <TextInput placeholder="请输入您要搜索的关键字" placeholderTextColor='white'style={{width:'80%'}}/>
                            <Icon name="shopping-cart" style={styles.shoppingCar}></Icon>
                        </View>
                    </View>

                    <View style={styles.wrapper}>
                        <Swiper>
                            <View >
                                <Image source={require('../img/lb1.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                            <View >
                                <Image source={require('../img/lb2.png')} style={{width:"100%",height:"100%"}} />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodybar}>
                            <View style={styles.imgborder1}>
                                <Image source={require('../img/01.png')} style={styles.img} />
                            </View>
                            <Text style={styles.bodytxt}>居家维修</Text>
                            <Icon name="right" style={styles.bodyicon}></Icon>
                        </View>
                        <View style={styles.bodybar}>
                            <View style={styles.imgborder2}>
                                <Image source={require('../img/02.png')} style={styles.img} />
                            </View>
                            <Text style={styles.bodytxt}>住宿优惠</Text>
                            <Icon name="right" style={styles.bodyicon}></Icon>
                        </View>
                        <View style={styles.bodybar}>
                            <View style={styles.imgborder3}>
                                <Image source={require('../img/03.png')} style={styles.img} />
                            </View>
                            <Text style={styles.bodytxt}>出行接送</Text>
                            <Icon name="right" style={styles.bodyicon}></Icon>
                        </View>
                        <View style={styles.bodybar}>
                            <View style={styles.imgborder4}>
                                <Image source={require('../img/04.png')} style={styles.img} />
                            </View>
                            <Text style={styles.bodytxt}>E族活动</Text>
                            <Icon name="right" style={styles.bodyicon}></Icon>
                        </View>
                        <Button style={styles.button}>发布需求</Button>
                        <Text style={styles.txt}>E族之家 版权所有</Text>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}
