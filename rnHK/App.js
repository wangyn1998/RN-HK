import React,{useState,useEffect} from 'react';
import {Icon, Button} from '@ant-design/react-native';
import {Router, Overlay, Scene, Tabs, Lightbox, Modal, Actions} from "react-native-router-flux";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  AsyncStorage,
  ToastAndroid,
  BackHandler,
} from 'react-native';

import Home from './components/Home';
import List from './components/List';
import Shopping from './components/Shopping';
import My from './components/My';
import Publish from './components/Publish';
import Login from './components/Login';
import Register from './components/Register';
import SwiperPage from './components/SwiperPage';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({

})

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene != 'home'){
          Actions.pop();
          return true;
        }else{
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }
        
      }}
    >
      <Overlay>
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox">
            <Scene key="root">
              <Tabs
                key='tabbar'
                hideNavBar
                activeTintColor='#f23131'
                inactiveTintColor='#949494'
                tabBarStyle={{backgroundColor:'#fffff'}}
              >
                <Scene key='homePage'
                  title='首页'
                  hideNavBar
                  icon={
                    ({focused})=><Icon
                    color={focused?'#f23131':'#949494'}
                    name="home"
                  />
                  }
                >
                  <Scene key='home' component={Home}/>
                </Scene>
                <Scene  
                  key='list'
                  title='商品分类'
                  hideNavBar
                  icon={
                    ({focused}) =>  <Icon
                    name={"appstore"} 
                    color={focused?'#f23131':'#949494'}
                    />
                  }
                >
                  <Scene key="list" component={List}/>
                </Scene>
                <Scene 
                  key='shopping'
                  title='购物车'
                  hideNavBar
                  icon={
                    ({focused}) =>  <Icon
                    name={"shopping-cart"}
                    color={focused?'#f23131':'#949494'}
                    />
                  }
                  >
                    <Scene key="shopping" component={Shopping}/>
                  </Scene>
                  <Scene key='my'
                    title='个人中心'
                    icon={
                      ({focused})=><Icon
                      color={focused?'#f23131':'#949494'}
                      name="user"
                      />
                      }
                  >
                    <Scene key='my' component={My}/>
                    <Scene  key='publish'
                        title='我的发布'
                        hideTabBar
                        navigationBarStyle={{backgroundColor:'#f23030'}}
                        backButtonImage={require('./img/back.png')}
                        titleStyle={{color:'white',marginLeft:140}}
                        component={Publish} 
                    />
                </Scene>
                
              </Tabs>
            </Scene>
          {/* <Scene key='light' component={Mybox}/> */}
        </Lightbox>

        <Scene initial={!isLogin} key="login" component={Login} />
        <Scene key="register" component={Register} />
        {/* <Scene key="login" component={ShowMyName}/> */}
        {/* <Scene key="login1" component={Login}/> */}
      </Modal>
      {/* <Scene component={Message}/> */}
      </Overlay>
    </Router>
  );
};

export default App;

{/*  */}