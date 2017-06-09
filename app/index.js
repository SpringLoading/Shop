/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    Navigator,//进行页面之间的跳转
} from 'react-native-deprecated-custom-components';
import Splash from './component/Main/Splash';

export default class Index extends Component{
//这里的index就相当于一个路由，splash就是路由的初始场景
    render(){
        return(
            <Navigator
                initialRoute={{name:'splash',component:Splash}}
                configureScene={()=>{// 过渡动画
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.component;
                    //个人习惯以{...route}这种方式传参
                    return <Component {...route} navigator={navigator}/>;
                }}
            />
        )

    }



}

