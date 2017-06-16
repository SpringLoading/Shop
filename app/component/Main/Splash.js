/**
 * Created by barry on 2017/6/7.
 */
import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
}from 'react-native';
import Main from './XMGMain'

export default class Splash extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <Image source={{uri:'launchimage'}} style={styles.splashStyle}/>
        )

    }
    componentDidMount(){
        this.toXMGMain();
    }

    //在splash页面等待两秒后调到XMGMain页面
    toXMGMain(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main,
            })

        },1)
    }


}
const styles = StyleSheet.create({
    splashStyle:{
        flex:1,

    }
})