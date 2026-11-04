// 作者：王乐
// 建立时间：2026-11-04 14:04:11
// 使用模型：GLM-5.3-Flash
// 功能名称：旅游投诉选项卡组件（可复用）
// 说明：对外暴露 wl_initTabs(容器)，可对页面中任意多个选项卡组重复调用

// 初始化一个选项卡组：为容器内所有 .wl_tab 绑定点击监听事件
function wl_initTabs(wl_container) {
  var wl_tabs = wl_container.querySelectorAll('.wl_tab');
  var wl_panels = wl_container.querySelectorAll('.wl_panel');

  // 为每个选项卡绑定点击事件监听
  wl_tabs.forEach(function (wl_tab) {
    wl_tab.addEventListener('click', function () {
      // 第一步：先清除所有选项卡与内容面板的选中状态
      wl_tabs.forEach(function (wl_t) {
        wl_t.classList.remove('wl_active');
      });
      wl_panels.forEach(function (wl_p) {
        wl_p.classList.remove('wl_active');
      });

      // 第二步：再设置当前点击的元素为选中状态
      this.classList.add('wl_active');

      // 根据当前项的 data-wl-panel 属性找到对应内容面板并选中
      var wl_target = wl_container.querySelector('#' + this.getAttribute('data-wl-panel'));
      if (wl_target) {
        wl_target.classList.add('wl_active');
      }
    });
  });
}

// 页面加载完成后初始化旅游投诉选项卡组
document.addEventListener('DOMContentLoaded', function () {
  wl_initTabs(document.getElementById('wl_tousuTabs'));
});
