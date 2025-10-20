# Geely VDI 登录助手

自动填写 Geely VDI 一次性验证码。使用唯一设备密钥加密 TOTP 密钥，并存储在 localStorage, 支持通过菜单重新输入 TOTP 密钥。

支持篡改猴 (Tampermonkey) 和 Chrome 扩展

**仅供学习研究使用，作者不对该脚本产生的任何行为负责。**

## Tampermonkey 脚本

Tampermonkey 又叫油猴或篡改猴

Tampermonkey 插件的安装不在这里描述

### 通过代码库安装

直接访问下列链接之一，篡改猴应该会直接弹出安装选项

如果没弹出安装页面，就全选内容，点击篡改猴图标 -> 添加新脚本 -> 粘贴 -> ctrl +s 保存

github 链接 <https://raw.githubusercontent.com/zcteo/geely-vdi-assistant/master/js/content.user.js>

gitee 加速链接 <https://gitee.com/zcteo/geely-vdi-assistant/raw/master/js/content.user.js>

### 通过脚本管理网站安装

**Greasyfork**

访问油叉首页 <https://greasyfork.org/zh-CN/> 搜索 `Geely VDI`

或直接访问 <https://greasyfork.org/zh-CN/scripts/531320-geely-vdi-assistant>

**OpenUserJS**

访问首页 <https://openuserjs.org/> 搜索 `Geely VDI`

或直接访问 <https://openuserjs.org/scripts/zcteo/Geely_VDI_Assistant>

## Chrome 扩展

亲测支持 Chrome 和新版 Edge 浏览器

下载整个项目 -> 浏览器管理扩展 -> 打开开发者模式 -> 加载已解压的扩展程序

> 上到扩展商店的事情，在做了，在做了
