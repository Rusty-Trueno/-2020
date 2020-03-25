// pages/calender/index.js
Page({
  data: {
    date: '',
    show: false
  },

  onShow() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
    wx.navigateBack({
      delta: 1
    })
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail)
    });
    console.log(this.data.date)
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      date:this.data.date
    });
    wx.navigateBack({
      delta:1
    })
  }
});