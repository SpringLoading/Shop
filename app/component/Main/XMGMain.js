/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,

    Platform,//判断当前运行的系统
} from 'react-native';
import {
    Navigator,//进行页面之间的跳转
} from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/XMGHome'
import Shop from '../Shop/XMGShop'
import Mine from '../Mine/XMGMine'
import More from '../More/XMGMore'
export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {selectedTab:'home'}
    }
    render(){
        return(
            <TabNavigator>
                {/*首页*/}
                {this.initTabNavigatorItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/*--商家--*/}
                {this.initTabNavigatorItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop', '商家', Shop)}
                {/*--我的--*/}
                {this.initTabNavigatorItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine', '我的', Mine, 2)}
                {/*--更多--*/}
                {this.initTabNavigatorItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more', '更多', More)}

            </TabNavigator>
        );
    }

    // 每一个TabNavigatorItem
    initTabNavigatorItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title= {title}//如果这里传递的是变量，一定要加{}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
                // badgeText="1"
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badgeText}

            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{// 过渡动画
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        )
    }

}
const styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS === 'ios' ? 30: 30,
        height:Platform.OS === 'ios' ? 30: 30,
    },
    selectedTitleStyle:{
        color:'orange'
    },


});