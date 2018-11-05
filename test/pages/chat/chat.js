// pages/chat/chat.js
var util = require('../../static/js/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      inputValue:'',
      chatRecord:[]
  },
  send:function(){
    var _chatRecord = this.data.chatRecord
    _chatRecord.push(this.data.inputValue)
    this.setData({
      chatRecord: _chatRecord
    })
  },
  wxModel:function(e){
    var value = e.detail.value
    this.data.inputValue = value
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})