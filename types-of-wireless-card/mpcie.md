# 迷你PCIe卡

所以mini PCIe对于那些没有M.2无线网络的老系统用户来说是最有用的。使用mini PCIe，你有几个选择:

* 半尺寸的迷你PCIe
* 全尺寸迷你PCIe
* 适应全尺寸mini PCIe的Apple AirPort卡

对于较老的笔记本电脑用户，由于空间限制，你通常只能使用一半大小的mini PCIe无线网卡，但对于台式机用户，建议购买带有适配器的苹果机场卡。原因是这避免了PCI ID不匹配和没有设置驱动程序标志的问题，解决方案是强制加载附带的kext或修改kext的PCI ID列表以支持您的型号。

关于mini PCIe需要注意的另一件事是，一些供应商在无线卡上安装了白名单，特别是只有他们品牌的卡才能工作。系统**甚至不会发布**安装了非品牌的内容，主要的罪魁祸首是:

* Lenovo (第7代及以上)
* Toshiba
* HP (第三代及以上)
* Compaq

[BIOS mods](https://medium.com/@p0358/removing-wlan-wwan-bios-whitelist-on-a-lenovo-laptop-to-use-a-custom-wi-fi-card-f6033a5a5e5a),有一些解决方法，但要小心，因为糟糕的补丁实际上会**影响你的设备**。

# 支持

* **BCM94360HMB** (ABGN+AC, BT 4.0, 3x3:3):

  * AzureWave AW-CB160H
  * Alpha Networks WMC-AC01
  * Arcadyan WN8833B-AC
  * Gemtek WMDB-150AC
  * Unex DAXB-81
  * Wistron NeWeb DNXB-C1

* **BCM94352HMB** (ABGN+AC, BT 4.0, 2x2:2):

  * AzureWave AW-CE123H
  * Dell DW1550
  * HP TPC-Q013
  * Lenovo Lite-On WCBN606BH

这里提供的所有卡都需要满足以下要求:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
    * 不要在macOS 12中使用，而是使用BlueToolFixup
    * 如果你同时启动macOS 11或以下和macOS 12，配置文件中`Kernel -> Add`下的`MinKernel`和`MaxKernel`可以用来在特定的操作系统中加载一个或另一个kext
  * BrcmFirmwareData
  * BrcmPatchRAM fix:
    * macOS 10.14+的BrcmPatchRAM3(必须与brcmbluetooth oothinjector配对，除非在macOS 12上)
    * macOS 10.11-10.14的BrcmPatchRAM2
    * macOS 10.10及更早版本的BrcmPatchRAM
  * BlueToolFixup:
    * 在macOS 12上用于替代brcmbluetooth oothinjector
    * 参见上面的双启动说明

# 旧型号(Mojave不支持)

使用这些型号，你需要重新插入你的无线卡在High Sierra使用的旧插件才能在Mojave工作。有几个不同的kext可以做到这一点，但一般来说，我们建议避免使用这些无线卡。

**注意**:将kext注入macOS Catalina会更加不稳定

* **BCM94322**4 HMS/HMB (ABGN, 2x2:2)
  * Dell DW1520
  * HP Gemtek WMIB-275N
  * Lenovo Gemtek WMIB-275N
  * Pegatron UPWL6024

* **AR9280** (ABGN, 2x2:2)

  * Atheros AR5BHB92
  * Atheros AR5BXB92
  * AzureWave AW-NE772
  * AzureWave AW-NE773
  * Compex WLE200N5-23-ESD
  * Compex WLE200NX
  * Dell DW1515
  * HP U98Z044
  * HP Lite-On WN6502AH
  * Silex SX-PCEAN
  * SparkLAN WPEA-110N
  * SparkLAN WPEA-111N
  * Ubiquiti Networks SR71-E
  * Unex DNXA-92

* **AR9380** (ABGN, 3x3:3)
  * Alpha Networks WMC-ND02
  * Killer Wireless-N 1103
  * Atheros AR5BHB112
  * Atheros AR5BXB112
  * Compex WLE300N5-22 7A0000
  * Compex WLE300NX 6A0000
  * HP U98Z081
  * JJPlus JWX6051
  * Lite-On WN6508A
  * SparkLAN WPEA-127N
  * SparkLAN WPEA-128N
  * Tehnoetic TET-N450DB
  * Vikings Atheros450
  * Wistron NeWeb DNXA-G1
