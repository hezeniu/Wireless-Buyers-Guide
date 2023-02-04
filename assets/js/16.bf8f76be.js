(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{400:function(t,r,e){"use strict";e.r(r);var a=e(28),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"蓝牙支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#蓝牙支持"}},[t._v("#")]),t._v(" 蓝牙支持")]),t._v(" "),e("p",[t._v("因此，在macOS中使用蓝牙时，它可能会变得非常混乱，不知道实际支持什么，什么不支持。")]),t._v(" "),e("h2",{attrs:{id:"支持的蓝牙芯片组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持的蓝牙芯片组"}},[t._v("#")]),t._v(" 支持的蓝牙芯片组")]),t._v(" "),e("p",[t._v("我本来打算手动查找每个支持的模型，但用户 "),e("a",{attrs:{href:"https://www.tonymacx86.com/members/markvillacampa.1790473/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MarkVillacampa"),e("OutboundLink")],1),t._v(" 已经做了很好的工作，所以我将链接到他的发现")]),t._v(" "),e("ul",[e("li",[e("strong",[e("a",{attrs:{href:"https://www.tonymacx86.com/threads/guide-how-to-get-bluetooth-and-wifi-working.275962/",target:"_blank",rel:"noopener noreferrer"}},[t._v("蓝牙列表"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("IOGEAR Bluetooth 4.0(GBU521)")]),t._v(" "),e("li",[t._v("ASUS USB-BT400")]),t._v(" "),e("li",[t._v("Insignia NS-PCY5BMA")])])])]),t._v(" "),e("p",[e("strong",[t._v("华硕和联想说明")]),t._v(":在第七代和更新的笔记本电脑芯片组中，蓝牙已集成到PCH中，这些oem没有任何USB轨道连接到他们的A/E插槽。这意味着你需要在主板上焊接新的蓝牙头，或者将USB电缆路由到现有的端口")]),t._v(" "),e("h2",{attrs:{id:"那么为什么蓝牙可以在我的英特尔卡上使用呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那么为什么蓝牙可以在我的英特尔卡上使用呢"}},[t._v("#")]),t._v(" 那么为什么蓝牙可以在我的英特尔卡上使用呢")]),t._v(" "),e("p",[t._v("这有点复杂，涉及到IOkit以及它如何处理不同的设备。蓝牙实际上在与系统的交互方面非常简单，由于它通常是通过USB运行的，一般设备可以很容易地连接到IOKit，并半原生地工作(通常会失去Handoff, AirDrop等)。另一方面，Wi-Fi要复杂得多，因为需要IO80211Family kext对设备提供明确的支持，所以只有Broadcom/Atheros卡才有可能工作。")]),t._v(" "),e("p",[t._v("因此，如果你从Windows重新启动到macOS，卡上的固件可能会卡住，让你的卡上暂时的蓝牙支持。为了确保它能够持续存在，你可以使用一个注入kext的固件，就像在 "),e("a",{attrs:{href:"https://github.com/zxystd/IntelBluetoothFirmware",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelBluetoothFirmware repo"),e("OutboundLink")],1),t._v("上找到的那样。")]),t._v(" "),e("h2",{attrs:{id:"bios中的蓝牙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bios中的蓝牙"}},[t._v("#")]),t._v(" BIOS中的蓝牙")]),t._v(" "),e("p",[t._v("所以为了在BIOS中支持蓝牙，你需要一个支持HID代理的蓝牙设备。HID代理的想法是创建一个最小的蓝牙栈，然后用它欺骗BIOS，让它认为你的蓝牙键盘实际上是USB键盘，因为没有任何固件真正实现了蓝牙。")]),t._v(" "),e("p",[t._v("所有苹果卡都原生支持这个功能，但你需要在其他设备上具体情况下进行搜索。")]),t._v(" "),e("h2",{attrs:{id:"在不同操作系统之间保留蓝牙密钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在不同操作系统之间保留蓝牙密钥"}},[t._v("#")]),t._v(" 在不同操作系统之间保留蓝牙密钥")]),t._v(" "),e("p",[t._v("这主要是针对只有一个蓝牙配置文件的设备，当切换操作系统时可能有点令人沮丧，我们将我们的本地Frewt boll再次拯救我们!")]),t._v(" "),e("ul",[e("li",[e("strong",[e("a",{attrs:{href:"https://github.com/dortania/clover-laptop-guide/blob/master/extras/dual-booting-with-bluetooth-devices.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("双启动蓝牙设备"),e("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=o.exports}}]);