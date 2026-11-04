// 作者：王乐
// 建立时间：2026-11-04 13:41:53
// 使用模型：GLM-5.3-Flash
// 功能名称：可复用 Tab 选项卡组件
// 说明：本文件对外暴露 wl_initTabs(容器)，可对页面中任意多个选项卡组重复调用

// 初始化一个选项卡组：为容器内所有 .wl_tab_item 绑定点击监听事件
function wl_initTabs(wl_container) {
  var wl_items = wl_container.querySelectorAll('.wl_tab_item');
  var wl_panels = wl_container.querySelectorAll('.wl_tab_panel');

  // 为每个选项卡标题绑定点击事件监听
  wl_items.forEach(function (wl_item) {
    wl_item.addEventListener('click', function () {
      // 第一步：先清除所有选项卡标题与内容面板的选中状态
      wl_items.forEach(function (wl_it) {
        wl_it.classList.remove('wl_active');
      });
      wl_panels.forEach(function (wl_panel) {
        wl_panel.classList.remove('wl_active');
      });

      // 第二步：再设置当前点击的元素为选中状态
      this.classList.add('wl_active');

      // 根据当前项的 data-wl-tab 属性找到对应内容面板并选中
      var wl_target = wl_container.querySelector('#' + this.getAttribute('data-wl-tab'));
      if (wl_target) {
        wl_target.classList.add('wl_active');
      }
    });
  });
}

// 页面加载完成后初始化新闻选项卡组
document.addEventListener('DOMContentLoaded', function () {
  wl_initTabs(document.getElementById('wl_newsTabs'));
});
