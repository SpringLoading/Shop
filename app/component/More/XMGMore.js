/**
 * Created by barry on 2017/6/5.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
    RefreshControl,
    TouchableWithoutFeedback
} from 'react-native';
import {CommonCell} from './XMGCommCell';

const styles = StyleSheet.create({

});

const Row = React.createClass({
    _onClick: function() {
        this.props.onClick(this.props.data);
    },
    render: function() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick} >
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    },
});

export default class More extends Component{

    constructor(props){
        super(props);
        this.state = {
            title: "默认值测试",
            switchEnable:false,
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(5)).map(
                (val, i) => ({text: 'Initial row ' + i, clicks: 0})),//这里返回的是一个数组，数组的value是一个对象{text：xxx,clicks:xxx}
        };
    }

    render(){

        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick.bind(this)}/>;
        });
        return(
            <View style={moreStyles.container}>
                {this.renderNavBar()}
                <ScrollView refreshControl={
                    //这个是listView和scrollView的刷新控件
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#ff0000"
                        title="Loading..."
                        titleColor="#00ff00"
                        colors={[ '#00ff00', '#0000ff']}

                        progressBackgroundColor="#ffffff"
                    />
                }>

                    {rows}
                    <View style={{marginTop:10}}>
                        <CommonCell title= {this.state.title} switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '通知' switchEnable = {true}></CommonCell>
                        <CommonCell title= '收藏' switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '扫一扫' switchEnable = {this.state.switchEnable}></CommonCell>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonCell title= '关注' switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '优惠券' switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '淘一淘' switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '我的订单' switchEnable = {this.state.switchEnable}></CommonCell>
                    </View>
                    <View style={{marginTop:10}}>
                        <CommonCell title= '意见反馈' switchEnable = {this.state.switchEnable}></CommonCell>
                        <CommonCell title= '清空缓存' switchEnable = {this.state.switchEnable}></CommonCell>
                    </View>



                </ScrollView>

            </View>
        )

    }
    //刷新
    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 每次刷新更新5条数据
            const rowData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: 'Loaded row ' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 3000);
    }


    //
    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    }

    //点击事件改变其他控件的显示,注意这边有两种箭头函数的写法。但是本质上是一个的
    changeShow(){
        // this.setState((preState)=> {
        //     return {
        //         title:preState.title +"+改变了",
        //     }
        // })
        this.setState((preState)=> (
            {
                title:preState.title +"+改变了",
            }
        ))
    }
    //导航条
    renderNavBar(){
        return (
            <View style={moreStyles.navTabContainer}>
                <Text style={{color:"#ffffff", fontSize:16, fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity style={moreStyles.rightViewStyle} onPress={this.changeShow.bind(this)} >
                    <Image source={{uri:'icon_mine_setting'}} style={moreStyles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }



}
const moreStyles = StyleSheet.create({
    //最外层容器的布局
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navTabContainer:{
        height: Platform.OS == 'ios' ? 64 : 54,
        backgroundColor:'rgba(255,96,0,1.0)',

        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 设置主轴的对齐方式
        justifyContent:'center'
    },
    navImageStyle:{
        width:25,
        height:25,


    },
    rightViewStyle:{
        //绝对定位
        position:'absolute',
        right:10
    },
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
        fontSize:20,
    },



});