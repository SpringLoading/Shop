/**
 * Created by barry on 2017/6/9.
 */

import React, {Component} from 'react';
import {
    Navigator,//进行页面之间的跳转
} from 'react-native-deprecated-custom-components';
import XMGHomeDetail from '../Home/XMGHomeDetail';
export default class Router extends Component{
//这里是一个路由。初始场景为XMGHomeDetail
    render(){
        return(
            <Navigator
                initialRoute={{name:'splash',component:XMGHomeDetail}}
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
