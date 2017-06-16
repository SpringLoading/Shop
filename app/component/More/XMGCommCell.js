/**
 * Created by barry on 2017/6/15.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Switch,
}from 'react-native';
export  class CommonCell extends Component{

    constructor(props){
        super(props);
        this.state={
            switchEnable:true
        }

    }
    render(){
        return (
        <TouchableOpacity onPress={()=>alert("你点击了我")}>
            <View style={commonCellStyles.container}>
                <Text style={commonCellStyles.leftStyle}>{this.props.title}</Text>
                {this.renderRightView()}
            </View>
        </TouchableOpacity>

        )
    }
    //右边的显示
    renderRightView(){
        if(this.props.switchEnable){
            return(
                <Switch style={{marginRight:8}}value={this.state.switchEnable === true} onValueChange={()=>{this.setState((preState)=>{
                    return {
                        //switchEnable:!this.state.switchEnable,
                        switchEnable:!preState.switchEnable,
                    }
                })}}/>
            )
        }else {
            return(
                <Image style={commonCellStyles.rightStyle} source={{uri:'icon_cell_rightArrow'}}/>
            )
        }

    }
}

const commonCellStyles = StyleSheet.create({
    container:{
        height: 44,
        backgroundColor:'#ffffff',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        // 设置主轴的方向
        flexDirection:'row',
        // 设置主轴的对齐方式
        justifyContent:'space-between',
        // // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',


    },
    rightStyle:{
        width:8,
        height:13,
        marginRight:10,
    },
    leftStyle:{
        marginLeft:10,
    }


    }
)