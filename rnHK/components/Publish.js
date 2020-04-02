import React, { Component } from 'react';
import { ToastAndroid} from 'react-native'; 
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
import { Button } from '@ant-design/react-native';


export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1
        }
    }
    
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                var temp = res.data
                for(var i=0;i<temp.length;i++){
                    var num = Math.random()
                    if(num<0.5){
                        temp[i].reply = '待回复';
                        temp[i].color = '#f23030'
                    }
                    else{
                        temp[i].reply = '已回复';
                        temp[i].color = '#858585';
                    }
                }
                this.setState({
                    data:temp
                });
                
                
            })
    }

    componentDidUpdate(prevProps,prevState){
        console.log(prevState.page);
        if(prevState.page!==this.state.page){
            let page=this.state.page;
            fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                var temp = res.data
                for(var i=0;i<temp.length;i++){
                    var num = Math.random()
                    if(num<0.5){
                        temp[i].reply = '待回复';
                        temp[i].color = '#f23030';
                    }
                    else{
                        temp[i].reply = '已回复';
                        temp[i].color = '#858585';
                    }
                }
                this.setState({
                    data:temp
                });
                
            })
        }
        
    }

    turnonPage = () =>{
        if(this.state.page == 1){
            ToastAndroid.show("没有上一页了 !", ToastAndroid.SHORT);
        }
        else{
            this.setState({
                page:this.state.page-1
            });
        }
        
    }
    turndownPage = () =>{
        this.setState({
            page:this.state.page+1
        });
    }
    render() {
        return (
            <ScrollView>
                <StatusBar backgroundColor="red" />
                <View >
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{width:'60%'}} >
                            {
                                this.state.data.map((item)=>(
                                <Text style={{marginTop:10,fontSize:16,color:'#858585',marginLeft:10}}>{item.title.slice(0,15)+'...'}</Text>
                                ))
                            }
                        </View>
                        <View style={{width:'25%'}}>
                            {
                                this.state.data.map((item)=>(
                                        <Text style={{marginTop:10,fontSize:16,color:'#858585'}}>{item.create_at.slice(0,10)}</Text>
                                ))
                            }
                        </View>
                        <View style={{width:'15%'}}>
                            {
                                this.state.data.map((item)=>(
                                    <Text style={{marginTop:10,fontSize:16,color:item.color}}>{item.reply}</Text>
                                ))
                            }
                            
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',marginTop:30}}>
                        <Button style={{backgroundColor:"#f23030",height:40,width:'36%',marginLeft:10,borderRadius:45}} onPress={this.turnonPage}>上一页</Button>
                        <Text style={{textAlign:'center',marginLeft:'5%',marginRight:'5%',marginTop:10}}>第{this.state.page}页</Text>
                        <Button style={{backgroundColor:"#f23030",height:40,width:'36%',borderRadius:45}}  onPress={this.turndownPage}>下一页</Button>
                    </View>
                </View>
            </ScrollView>
            
        )
    }
}
