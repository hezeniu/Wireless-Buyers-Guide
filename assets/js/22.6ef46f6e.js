(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{404:function(v,_,l){"use strict";l.r(_);var e=l(28),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"pcie卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#pcie卡"}},[v._v("#")]),v._v(" PCIe卡")]),v._v(" "),l("p",[v._v("到目前为止，最受桌面电脑用户欢迎的选择是购买旧的苹果机场无线网卡，并将其放入PCIe riser卡中。这样做的好处是，只要硬件在真正的Mac上工作，它就可以在没有任何kext /框架修改的情况下工作。对于PCIe，你有以下几种选择。")]),v._v(" "),l("ul",[l("li",[v._v("适用于全尺寸PCIe适配器的苹果机场卡(推荐)")]),v._v(" "),l("li",[v._v("适用于M.2 B+M Key的Apple AirPort卡(与NVMe ssd使用的相同)")]),v._v(" "),l("li",[v._v("适用于M.2 A+E Key的Apple AirPort卡(与Intel无线卡相同)")]),v._v(" "),l("li",[v._v("全尺寸PCIe无线卡")])]),v._v(" "),l("p",[v._v("目前支持的芯片组:")]),v._v(" "),l("ul",[l("li",[v._v("BCM943602CDP")]),v._v(" "),l("li",[v._v("BCM943602CD")]),v._v(" "),l("li",[v._v("BCM94360CD")]),v._v(" "),l("li",[v._v("BCM94331CD (可能需要强制kext加载为 Catalina)")]),v._v(" "),l("li",[v._v("BCM94360CS2")]),v._v(" "),l("li",[v._v("BCM943602CS")]),v._v(" "),l("li",[v._v("BCM94360CSAX")]),v._v(" "),l("li",[v._v("BCM94360CS")]),v._v(" "),l("li",[v._v("BCM94352Z")]),v._v(" "),l("li",[v._v("BCM94350ZAE")])]),v._v(" "),l("h1",{attrs:{id:"支持-全尺寸pcie无线网卡"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#支持-全尺寸pcie无线网卡"}},[v._v("#")]),v._v(" 支持(全尺寸PCIe无线网卡)")]),v._v(" "),l("ul",[l("li",[l("p",[l("strong",[v._v("BCM94360CD")]),v._v(" (ABGN+AC):")]),v._v(" "),l("ul",[l("li",[v._v("Fenvi FV T919 (蓝牙4.0)")]),v._v(" "),l("li",[v._v("Fenvi AC1900 (无蓝牙，EOL)")]),v._v(" "),l("li",[v._v("TP-LINK Archer T9E AC1900 (无蓝牙，EOL)")]),v._v(" "),l("li",[v._v("TP-LINK Archer T8E (无蓝牙)")]),v._v(" "),l("li",[v._v("RNX-AC1900PCE (无蓝牙)")]),v._v(" "),l("li",[v._v("ASUS PCE-AC66 (无蓝牙)")]),v._v(" "),l("li",[v._v("ASUS PCE-AC68 (无蓝牙)")])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("BCM94360CS2")]),v._v(" (ABGN+AC):")]),v._v(" "),l("ul",[l("li",[v._v("Fenvi FV-HB1200 (蓝牙4.0)")]),v._v(" "),l("li",[v._v("AWD Wireless LAN Card (无蓝牙)")])])]),v._v(" "),l("li",[l("p",[l("strong",[v._v("BCM94352")]),v._v(" (ABGN+AC):")]),v._v(" "),l("ul",[l("li",[v._v("TP-LINK Archer T6 (无蓝牙)")]),v._v(" "),l("li",[v._v("Rosewill RNX-AC1300PCE (无蓝牙)")]),v._v(" "),l("li",[v._v("ASUS PCE-AC56 (无蓝牙)")])])])]),v._v(" "),l("p",[v._v("除了Apple AirPort和Fenvi卡外，这里介绍的所有卡都需要满足以下要求:")]),v._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("AirportBrcmFixup"),l("OutboundLink")],1)]),v._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/acidanthera/BrcmPatchRAM/releases",target:"_blank",rel:"noopener noreferrer"}},[v._v("BrcmPatchRAM"),l("OutboundLink")],1),v._v(" "),l("ul",[l("li",[v._v("BrcmBluetoothInjector\n"),l("ul",[l("li",[v._v("不要在macOS 12中使用，而是使用BlueToolFixup")]),v._v(" "),l("li",[v._v("如果你同时启动macOS 11或以下和macOS 12，配置文件中"),l("code",[v._v("Kernel -> Add")]),v._v("下的"),l("code",[v._v("MinKernel")]),v._v("和"),l("code",[v._v("MaxKernel")]),v._v("可以用来在特定的操作系统中加载一个或另一个kext")])])]),v._v(" "),l("li",[v._v("BrcmFirmwareData")]),v._v(" "),l("li",[v._v("BrcmPatchRAM fix:\n"),l("ul",[l("li",[v._v("macOS 10.14+的BrcmPatchRAM3(必须与BrcmBluetoothInjector配对，除非macOS 12)")]),v._v(" "),l("li",[v._v("macOS 10.11-10.14的BrcmPatchRAM2")]),v._v(" "),l("li",[v._v("macOS 10.10及更早版本的BrcmPatchRAM")])])]),v._v(" "),l("li",[v._v("BlueToolFixup:\n"),l("ul",[l("li",[v._v("在macOS 12上用于替代brcmbluetooth oothinjector")]),v._v(" "),l("li",[v._v("参见上面的双启动说明")])])])])])]),v._v(" "),l("h1",{attrs:{id:"旧型号-mojave不支持"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#旧型号-mojave不支持"}},[v._v("#")]),v._v(" 旧型号(Mojave不支持)")]),v._v(" "),l("p",[v._v("使用这些型号，你需要重新插入你的无线卡在High Sierra使用的旧插件才能在Mojave工作。有几个不同的kext可以做到这一点，但一般来说，我们建议避免这些卡，除非绝对必要。")]),v._v(" "),l("p",[l("strong",[v._v("注意")]),v._v(":将kext注入macOS Catalina会更加不稳定，"),l("strong",[v._v("强烈建议升级")])]),v._v(" "),l("ul",[l("li",[l("strong",[v._v("Atheros 9380")]),v._v(":\n"),l("ul",[l("li",[v._v("TP-Link TL-WDN4800")]),v._v(" "),l("li",[v._v("Rosewill N900")]),v._v(" "),l("li",[v._v("Atheros AR5BDT92")])])]),v._v(" "),l("li",[l("strong",[v._v("Atheros 9280")]),v._v(":\n"),l("ul",[l("li",[v._v("Dell DW 1525")]),v._v(" "),l("li",[v._v("Gemtek WPEA-113N")])])]),v._v(" "),l("li",[l("strong",[v._v("Atheros AR9287")]),v._v(":\n"),l("ul",[l("li",[v._v("Nexxt Solutions Saros 300 (APLDT300N1)")]),v._v(" "),l("li",[v._v("TP-LINK TL-WN881ND")])])]),v._v(" "),l("li",[l("strong",[v._v("Atheros AR9285")]),v._v(":\n"),l("ul",[l("li",[v._v("AzureWave AW-NE106")]),v._v(" "),l("li",[v._v("Rosewill RNX-N150PCe v1")]),v._v(" "),l("li",[v._v("SMC SMCWPCIeS-N")]),v._v(" "),l("li",[v._v("TP-LINK TL-WN781ND v1")]),v._v(" "),l("li",[v._v("ZyXEL NWD3105")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);