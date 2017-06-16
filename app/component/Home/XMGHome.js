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
    ScrollView,

} from 'react-native';

/**----导入外部的组件类---**/
import HomeDetail from './XMGHomeDetail'
var TopView = require('./XMGTopView');
var MiddleView = require('./XMGHomeMiddleView');
var MiddleBottomView = require('./XMGMiddleBottomView');
var ShopCenter = require('./XMGShopCenter');
var ShopCenterDetail = require('./XMGShopCenterDetail');
var GeustYouLike = require('./XMGGeustYouLike');
import Router from '../Router/ThirdRouter'
import {
    Navigator,//进行页面之间的跳转
} from 'react-native-deprecated-custom-components';

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
            {/*测试页面跳转*/}
            <TouchableOpacity onPress={()=>{this.pushToDetail()}}>

                <Text style={styles.welcome}>
                    首页面,点击查看详情页
                </Text>
            </TouchableOpacity>

                {/*首页的主要内容*/}
                <ScrollView>
                    {/*头部的View*/}
                    <TopView />
                    {/*中间的内容*/}
                    <MiddleView />
                    {/*中间下半部分的内容*/}
                    <MiddleBottomView
                        popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                    {/*购物中心*/}
                    <ShopCenter
                        popToHomeView = {(url) => this.pushToShopCenterDetail(url)}
                    />

                    {/*猜你喜欢*/}
                    <GeustYouLike />

                </ScrollView>
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
    // 跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                component: ShopCenterDetail, // 要跳转的版块
                passProps: {'url': this.dealWithUrl(url)}
            }
        );
    }

    // 处理URL
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=', '');
    }

    //跳转到二级界面
    pushToDetail(){
        this.props.navigator.push({
            name:'首页详情页',
            component:HomeDetail,//目标页面
            params:{
                zhc:':params从home页面传递过来的参数'//直接在HomeDetail用this.props.name
            },
            //params和passProps都可以，只需要在定义navigator的时候再return 组件的时候作为props传过来就行，
            // 在XMGMain中可以看到，其中...是es6的rest扩展写法
            passProps:{
                zhc:':passProps从home页面传递过来的参数'//直接在HomeDetail用this.props.name
            },

            callbackzhc:(msg)=>{
                alert('回调函数'+msg);
            }
        });
        //重新设置路由
        // this.props.navigator.replace({
        //         component:Router,
        //         name:'首页详情页',
        //         component:HomeDetail,//目标页面
        //         params:{
        //             zhc:':params从home页面传递过来的参数'//直接在HomeDetail用this.props.name
        //         },
        //         //params和passProps都可以，只需要在定义navigator的时候再return 组件的时候作为props传过来就行，
        //         // 在XMGMain中可以看到，其中...是es6的rest扩展写法
        //         passProps:{
        //             zhc:':passProps从home页面传递过来的参数'//直接在HomeDetail用this.props.name
        //         },
        //
        //         callbackzhc:(msg)=>{
        //             alert('回调函数'+msg);
        //         }
        // });

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