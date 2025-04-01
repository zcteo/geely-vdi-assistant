# Geely VDI 登录助手

自动填写 Geely VDI 一次性验证码。使用唯一设备密钥加密 TOTP 密钥，并存储在 localStorage, 支持通过菜单重新输入 TOTP 密钥。

支持篡改猴 (Tampermonkey) 和 Chrome 扩展

仅供学习研究使用，作者不对该脚本产生的任何行为负责。

> 作者：zcteo.cn@gmail.com

## Tampermonkey 脚本

Tampermonkey 插件的安装不在这里描述

### 能访问油叉 Greasyfork

访问油叉 [首页](https://greasyfork.org/zh-CN/) 搜索 `Geely VDI` 

或者直接访问 [Geely VDI 登录助手](https://greasyfork.org/zh-CN/scripts/531320-geely-vdi-%E7%99%BB%E5%BD%95%E5%8A%A9%E6%89%8B)

### 不能访问油叉

全选复制 `js/content.js` 内容

点击篡改猴图标 -> 添加新脚本 -> 粘贴 -> `ctrl +s` 保存

## Chrome 扩展

亲测支持 Chrome 和新版 Edge 浏览器

下载整个项目 -> 浏览器管理扩展 -> 打开开发者模式 -> 加载已解压的扩展程序

> 上到扩展商店的事情，在做了，在做了
