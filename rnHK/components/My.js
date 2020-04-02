import React, { Component } from 'react';
import {Icon} from '@ant-design/react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux'
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    AsyncStorage,
    StatusBar
} from 'react-native';

const styles = StyleSheet.create({
    all:{
        backgroundColor:"#f5f5f5"
    },
    head:{
        backgroundColor:"#f23030",
        height:200,
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    picbk:{
        height:106,
        width:106,
        borderRadius:55,
        backgroundColor:'white',
    },
    pic:{
        height:100,
        width:100,
        borderRadius:75,
        marginTop:3,
        marginLeft:3
    },
    id:{
        fontSize:15,
        color:'white',
    },
    my:{
        height:325,
        width:'100%',
        backgroundColor:'#ffffff'
    },
    myheader:{
        height:40,
        width:"100%",
        marginTop:10,
        flexDirection:"row"
    },
    myheaderIcon:{
        width:30,
        height:30,
        marginLeft:10,
        marginTop:5
    },
    myheadertxt:{
        fontSize:16,
        marginLeft:10,
        marginTop:5,
        color:'#4f4e4e'
    },
    line:{
        height:1,
        width:"100%"
        ,backgroundColor:"#eeeeee"
    },
    mybody:{
        marginTop:10,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    mybodyev:{
        height:60,
        width:80,
        marginTop:20,
        marginLeft:'10%',
    },
    myicon:{
        height:30,
        width:30,
        marginLeft:30,
        color:"#aeaeae"
    },
    mytxt:{
        marginTop:10,
        marginLeft:15,
        fontSize:12
    },
    ezu:{
        marginTop:5,
        height:250,
        width:'100%',
        backgroundColor:'#ffffff'
    },
    button:{
        width:'85%',
        height:40,
        backgroundColor:'#f23030',
        borderRadius:10,
        marginTop:20,
        marginLeft:38,
        color:'#ffffff',
        lineHeight:40,
        marginBottom:20
    }
})
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class My extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:''
        };
    }
    componentDidMount(){
        AsyncStorage.getItem('imageUrl')
        .then((res)=>this.setState({
            imageUrl:{ 'uri':res},
        }));
        
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                this.setState({
                    imageUrl: { uri: response.uri },
                });
                AsyncStorage.setItem('imageUrl',response.uri);
            }
          });
    };
    unlogin = () =>{
        AsyncStorage.clear()
        .then(()=>{
            Actions.login();
        })
        
    }
    
    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor="red"/>
                <View style={styles.all}>
                    <View style={styles.head}>
                        <View style={styles.picbk}>
                            <Button  onPress={()=>{this.takephoto()}} style={{backgroundColor:'black'}} >
                                <Image source={this.state.imageUrl} style={styles.pic} />
                            </Button>
                        </View>
                        <Text style={styles.id}>BINNU DHILLON</Text>
                    </View>
                    <View style={styles.my}>
                        <View style={styles.myheader}>
                            <Icon name="user" style={styles.myheaderIcon}></Icon>
                            <Text style={styles.myheadertxt}>我的个人中心</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.mybody}>
                            <View style={styles.mybodyev}>
                                <Icon name="setting" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>账户管理</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="environment" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>收货地址</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="idcard" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的信息</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="container" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的订单</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="windows" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的二维码</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="rocket" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的积分</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="star" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的收藏</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ezu}>
                        <View style={styles.myheader}>
                            <Icon name="tag" style={styles.myheaderIcon}></Icon>
                            <Text style={styles.myheadertxt}>E族活动</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.mybody}>
                            <View style={styles.mybodyev}>
                                <Icon name="tool" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>居家维修</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="car" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>出行接送</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="user" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的受赠人</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="coffee" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我住宿优惠</Text>
                            </View>
                            <View style={styles.mybodyev}>
                                <Icon name="flag" style={styles.myicon}></Icon>
                                <Text style={styles.mytxt}>我的活动</Text>
                            </View>
                            <Button onPress={()=>Actions.publish()}>
                                <View style={styles.mybodyev} >
                                    <Icon name="form" style={styles.myicon}></Icon>
                                    <Text style={styles.mytxt}>我的发布</Text>
                                </View>
                                
                            </Button>
                        </View>
                    </View>
                    <Button style={styles.button} onPress={this.unlogin}>退出登录</Button>
                </View>
            </ScrollView>
        )
    }
}