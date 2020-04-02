import React, { Component } from 'react'
import {Icon} from '@ant-design/react-native';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  search:{
    height:70,
    width:'100%',
    backgroundColor:'#fff',
    flexDirection:'row'
  },
  searchBar:{
    height:40,
    width:'75%',
    backgroundColor:'#eeeeee',
    borderRadius:2,
    marginTop:15,
    marginLeft:'10%',
  },
  searchImg:{
    height:40,
    width:30,
    backgroundColor:'#eeeeee',
    marginTop:15,
  },
  img:{
    backgroundColor:'#eee',
    height:20,
    width:20,
    marginTop:10
  },
  tab:{
    flexDirection:'row',
    width:'100%',
    height:70,
    backgroundColor:'#fff'
  },
  tabs1:{
    marginLeft:45,
    width:'15%',
    fontSize:20,
    marginTop:22
  },
  tabs:{
    width:'18%',
    fontSize:20,
    marginTop:22
  },
  body:{
    flexDirection:'row',
    flexWrap:'wrap',
    height:1100,
    width:'100%',
    backgroundColor:'#eeeeee'
  },
  store:{
    height:310,
    width:'44%',
    marginLeft:15,
    marginTop:10,
    backgroundColor:'#fff'
  },
  picLeft:{
    height:140,
    width:120,
    marginTop:20,
    marginLeft:'14%'
  },
  picRight:{
    height:150,
    width:155,
    marginTop:20,
    marginLeft:'14%'
  },
  txt1:{
    fontSize:14,
    color:'#666666',
    marginLeft:10,
    marginTop:40
  },
  txt2:{
    fontSize:14,
    color:'#f23030',
    marginLeft:10,
    marginTop:10
  }
});
export default class List extends Component {
    render() {
        return (
            <ScrollView>
          <View style={styles.search} >
            <View  style={styles.searchBar}>
              <TextInput placeholder='请输入商品名称'/>
            </View>
            <View style={styles.searchImg} >
              <View style={styles.img}>
                <Icon name ='search'></Icon>
              </View>
            </View>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabs1}>综合</Text>
            <Text style={styles.tabs}>销量</Text>
            <Text style={styles.tabs}>新品</Text>
            <Text style={styles.tabs}>价格</Text>
            <Text style={styles.tabs}>信用</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.store}>
              <Image style={styles.picLeft} source={require('../img/1.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
            <View style={styles.store}>
              <Image style={styles.picRight} source={require('../img/2.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
            <View style={styles.store}>
              <Image style={styles.picLeft} source={require('../img/1.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
            <View style={styles.store}>
              <Image style={styles.picRight} source={require('../img/2.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
            <View style={styles.store}>
              <Image style={styles.picLeft} source={require('../img/1.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
            <View style={styles.store}>
              <Image style={styles.picRight} source={require('../img/2.png')}/>
              <Text style={styles.txt1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.txt2}>36.00</Text>
            </View>
          </View>
        </ScrollView>
        )
    }
}

