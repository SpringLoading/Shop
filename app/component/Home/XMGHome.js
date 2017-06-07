/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform,
    TextInput,
    Image,

} from 'react-native';
import HomeDetail from './XGMHomeDetail'
var Dimensions = require('Dimensions')
var {width, height} = Dimensions.get('window');
export default class Home extends Component{
    constructor(props){
       super(props)
    }
    render(){
        return(
            <View style={styles.container}>
                {/*首页导航条*/}
            {this.renderNavBar()}
            <TouchableOpacity onPress={()=>{this.pushToDetail()}}>

                <Text style={styles.welcome}>
                    首页面,点击查看详情页
                </Text>
            </TouchableOpacity>
            </View>

        )

    }
    //首页导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                {/*左边*/}
                <Text>上海</Text>
                {/*中间*/}
                <TextInput
                    placeholder={'请输入商家，品类，商圈'}
                    style={styles.navInputStyle}
                    underlineColorAndroid={'transparent'}//去掉Android的下划线
                />
                {/*右边Te*/}
                <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}>
                </Image>
                <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}>
                </Image>

            </View>
        )
    }
    //跳转到二级界面
    pushToDetail(){
        this.props.navigator.push({
            name:'首页详情页',
            component:HomeDetail,//目标页面

        });
    }

}
const styles = StyleSheet.create({
    // 导航条样式
    navBarStyle:{
        height: Platform.OS == 'ios' ? 64 : 54,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'space-around'
    },
    //导航栏输入框的样式
    navInputStyle:{
        width:width*0.72,
        height:38,
        backgroundColor:'white',
        //设置圆角
        borderRadius:18,
        //设置文字居中
        textAlign:'center'
    },

    // 导航条右侧图片样式
    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28: 24,
        height:Platform.OS == 'ios' ? 28: 24
    },
    //最外层容器的布局
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});