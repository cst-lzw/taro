import Taro, { Component } from '@tarojs/taro'
import './index.scss'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import {connect} from '@tarojs/redux'
import action from '../../utils/action'

@connect(({common}) => ({
  common,

}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: 'Taro',
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark', // 下拉时顶部显示颜色为深色的三个点
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 下拉刷新
  onPullDownRefresh () { }

  // 触底
  onReachBottom () { }

  // 监听转发点击
  onShareAppMessage(res) {
    let iUid = 0
    let imageUrl = ''
    let title = 'Taro'
    // 从右上角菜单点击分享
    if (res.from === 'menu') {
      return {
        title: title,
        path: '/pages/index/index?iUid=' + iUid,
        imageUrl
      }
    }
    // 点击按钮分享
    if (res.from === 'button') {
      return {
        title: title,
        path: '/pages/index/index?iUid=' + iUid,
        imageUrl
      }
    }
  }


  /*
  * 接口
  * */


  /*
  * 逻辑
  * */


  /*
  * 渲染
  * */


  render () {
    return <View className='home-index'>
      home
    </View>
  }
}
