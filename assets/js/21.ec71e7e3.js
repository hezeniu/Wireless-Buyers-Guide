(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{403:function(v,_,e){"use strict";e.r(_);var i=e(28),l=Object(i.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"mini-pcie卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mini-pcie卡"}},[v._v("#")]),v._v(" mini PCIe卡")]),v._v(" "),e("p",[v._v("所以mini PCIe对于那些没有M.2无线网络的老系统用户来说是最有用的。使用mini PCIe，你有几个选择:")]),v._v(" "),e("ul",[e("li",[v._v("半尺寸的迷你PCIe")]),v._v(" "),e("li",[v._v("全尺寸迷你PCIe")]),v._v(" "),e("li",[v._v("适应全尺寸mini PCIe的Apple AirPort卡")])]),v._v(" "),e("p",[v._v("对于较老的笔记本电脑用户，由于空间限制，你通常只能使用一半大小的mini PCIe无线网卡，但对于台式机用户，建议购买带有适配器的苹果机场卡。原因是这避免了PCI ID不匹配和没有设置驱动程序标志的问题，解决方案是强制加载附带的kext或修改kext的PCI ID列表以支持您的型号。")]),v._v(" "),e("p",[v._v("关于mini PCIe需要注意的另一件事是，一些供应商在无线卡上安装了白名单，特别是只有他们品牌的卡才能工作。系统"),e("strong",[v._v("甚至不会发布")]),v._v("安装了非品牌的内容，主要的罪魁祸首是:")]),v._v(" "),e("ul",[e("li",[v._v("Lenovo (第7代及以上)")]),v._v(" "),e("li",[v._v("Toshiba")]),v._v(" "),e("li",[v._v("HP (第三代及以上)")]),v._v(" "),e("li",[v._v("Compaq")])]),v._v(" "),e("p",[e("a",{attrs:{href:"https://medium.com/@p0358/removing-wlan-wwan-bios-whitelist-on-a-lenovo-laptop-to-use-a-custom-wi-fi-card-f6033a5a5e5a",target:"_blank",rel:"noopener noreferrer"}},[v._v("BIOS mods"),e("OutboundLink")],1),v._v(",有一些解决方法，但要小心，因为糟糕的补丁实际上会"),e("strong",[v._v("影响你的设备")]),v._v("。")]),v._v(" "),e("h1",{attrs:{id:"支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持"}},[v._v("#")]),v._v(" 支持")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("BCM94360HMB")]),v._v(" (ABGN+AC, BT 4.0, 3x3:3):")]),v._v(" "),e("ul",[e("li",[v._v("AzureWave AW-CB160H")]),v._v(" "),e("li",[v._v("Alpha Networks WMC-AC01")]),v._v(" "),e("li",[v._v("Arcadyan WN8833B-AC")]),v._v(" "),e("li",[v._v("Gemtek WMDB-150AC")]),v._v(" "),e("li",[v._v("Unex DAXB-81")]),v._v(" "),e("li",[v._v("Wistron NeWeb DNXB-C1")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("BCM94352HMB")]),v._v(" (ABGN+AC, BT 4.0, 2x2:2):")]),v._v(" "),e("ul",[e("li",[v._v("AzureWave AW-CE123H")]),v._v(" "),e("li",[v._v("Dell DW1550")]),v._v(" "),e("li",[v._v("HP TPC-Q013")]),v._v(" "),e("li",[v._v("Lenovo Lite-On WCBN606BH")])])])]),v._v(" "),e("p",[v._v("这里提供的所有卡都需要满足以下要求:")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("AirportBrcmFixup"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("BrcmPatchRAM"),e("OutboundLink")],1),v._v(" "),e("ul",[e("li",[v._v("BrcmBluetoothInjector\n"),e("ul",[e("li",[v._v("不要在macOS 12中使用，而是使用BlueToolFixup")]),v._v(" "),e("li",[v._v("如果你同时启动macOS 11或以下和macOS 12，配置文件中"),e("code",[v._v("Kernel -> Add")]),v._v("下的"),e("code",[v._v("MinKernel")]),v._v("和"),e("code",[v._v("MaxKernel")]),v._v("可以用来在特定的操作系统中加载一个或另一个kext")])])]),v._v(" "),e("li",[v._v("BrcmFirmwareData")]),v._v(" "),e("li",[v._v("BrcmPatchRAM fix:\n"),e("ul",[e("li",[v._v("macOS 10.14+的BrcmPatchRAM3(必须与brcmbluetooth oothinjector配对，除非在macOS 12上)")]),v._v(" "),e("li",[v._v("macOS 10.11-10.14的BrcmPatchRAM2")]),v._v(" "),e("li",[v._v("macOS 10.10及更早版本的BrcmPatchRAM")])])]),v._v(" "),e("li",[v._v("BlueToolFixup:\n"),e("ul",[e("li",[v._v("在macOS 12上用于替代brcmbluetooth oothinjector")]),v._v(" "),e("li",[v._v("参见上面的双启动说明")])])])])])]),v._v(" "),e("h1",{attrs:{id:"旧型号-mojave不支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#旧型号-mojave不支持"}},[v._v("#")]),v._v(" 旧型号(Mojave不支持)")]),v._v(" "),e("p",[v._v("使用这些型号，你需要重新插入你的无线卡在High Sierra使用的旧插件才能在Mojave工作。有几个不同的kext可以做到这一点，但一般来说，我们建议避免使用这些无线卡。")]),v._v(" "),e("p",[e("strong",[v._v("注意")]),v._v(":将kext注入macOS Catalina会更加不稳定")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("BCM94322")]),v._v("4 HMS/HMB (ABGN, 2x2:2)")]),v._v(" "),e("ul",[e("li",[v._v("Dell DW1520")]),v._v(" "),e("li",[v._v("HP Gemtek WMIB-275N")]),v._v(" "),e("li",[v._v("Lenovo Gemtek WMIB-275N")]),v._v(" "),e("li",[v._v("Pegatron UPWL6024")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("AR9280")]),v._v(" (ABGN, 2x2:2)")]),v._v(" "),e("ul",[e("li",[v._v("Atheros AR5BHB92")]),v._v(" "),e("li",[v._v("Atheros AR5BXB92")]),v._v(" "),e("li",[v._v("AzureWave AW-NE772")]),v._v(" "),e("li",[v._v("AzureWave AW-NE773")]),v._v(" "),e("li",[v._v("Compex WLE200N5-23-ESD")]),v._v(" "),e("li",[v._v("Compex WLE200NX")]),v._v(" "),e("li",[v._v("Dell DW1515")]),v._v(" "),e("li",[v._v("HP U98Z044")]),v._v(" "),e("li",[v._v("HP Lite-On WN6502AH")]),v._v(" "),e("li",[v._v("Silex SX-PCEAN")]),v._v(" "),e("li",[v._v("SparkLAN WPEA-110N")]),v._v(" "),e("li",[v._v("SparkLAN WPEA-111N")]),v._v(" "),e("li",[v._v("Ubiquiti Networks SR71-E")]),v._v(" "),e("li",[v._v("Unex DNXA-92")])])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("AR9380")]),v._v(" (ABGN, 3x3:3)")]),v._v(" "),e("ul",[e("li",[v._v("Alpha Networks WMC-ND02")]),v._v(" "),e("li",[v._v("Killer Wireless-N 1103")]),v._v(" "),e("li",[v._v("Atheros AR5BHB112")]),v._v(" "),e("li",[v._v("Atheros AR5BXB112")]),v._v(" "),e("li",[v._v("Compex WLE300N5-22 7A0000")]),v._v(" "),e("li",[v._v("Compex WLE300NX 6A0000")]),v._v(" "),e("li",[v._v("HP U98Z081")]),v._v(" "),e("li",[v._v("JJPlus JWX6051")]),v._v(" "),e("li",[v._v("Lite-On WN6508A")]),v._v(" "),e("li",[v._v("SparkLAN WPEA-127N")]),v._v(" "),e("li",[v._v("SparkLAN WPEA-128N")]),v._v(" "),e("li",[v._v("Tehnoetic TET-N450DB")]),v._v(" "),e("li",[v._v("Vikings Atheros450")]),v._v(" "),e("li",[v._v("Wistron NeWeb DNXA-G1")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);