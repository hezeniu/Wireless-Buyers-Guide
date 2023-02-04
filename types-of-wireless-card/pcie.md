# PCIe卡

到目前为止，最受桌面电脑用户欢迎的选择是购买旧的苹果机场无线网卡，并将其放入PCIe riser卡中。这样做的好处是，只要硬件在真正的Mac上工作，它就可以在没有任何kext /框架修改的情况下工作。对于PCIe，你有以下几种选择。

* 适用于全尺寸PCIe适配器的苹果机场卡(推荐)
* 适用于M.2 B+M Key的Apple AirPort卡(与NVMe ssd使用的相同)
* 适用于M.2 A+E Key的Apple AirPort卡(与Intel无线卡相同)
* 全尺寸PCIe无线卡

目前支持的芯片组:

* BCM943602CDP
* BCM943602CD
* BCM94360CD
* BCM94331CD (可能需要强制kext加载为 Catalina)
* BCM94360CS2
* BCM943602CS
* BCM94360CSAX
* BCM94360CS
* BCM94352Z
* BCM94350ZAE

# 支持(全尺寸PCIe无线网卡)

* **BCM94360CD** (ABGN+AC):

  * Fenvi FV T919 (蓝牙4.0)
  * Fenvi AC1900 (无蓝牙，EOL)
  * TP-LINK Archer T9E AC1900 (无蓝牙，EOL)
  * TP-LINK Archer T8E (无蓝牙)
  * RNX-AC1900PCE (无蓝牙)
  * ASUS PCE-AC66 (无蓝牙)
  * ASUS PCE-AC68 (无蓝牙)

* **BCM94360CS2** (ABGN+AC):

  * Fenvi FV-HB1200 (蓝牙4.0)
  * AWD Wireless LAN Card (无蓝牙)

* **BCM94352** (ABGN+AC):

  * TP-LINK Archer T6 (无蓝牙)
  * Rosewill RNX-AC1300PCE (无蓝牙)
  * ASUS PCE-AC56 (无蓝牙)

除了Apple AirPort和Fenvi卡外，这里介绍的所有卡都需要满足以下要求:

* [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup/releases)
* [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)
  * BrcmBluetoothInjector
    * 不要在macOS 12中使用，而是使用BlueToolFixup
    * 如果你同时启动macOS 11或以下和macOS 12，配置文件中`Kernel -> Add`下的`MinKernel`和`MaxKernel`可以用来在特定的操作系统中加载一个或另一个kext
  * BrcmFirmwareData
  * BrcmPatchRAM fix:
    * macOS 10.14+的BrcmPatchRAM3(必须与BrcmBluetoothInjector配对，除非macOS 12)
    * macOS 10.11-10.14的BrcmPatchRAM2
    * macOS 10.10及更早版本的BrcmPatchRAM
  * BlueToolFixup:
    * 在macOS 12上用于替代brcmbluetooth oothinjector
    * 参见上面的双启动说明

# 旧型号(Mojave不支持)

使用这些型号，你需要重新插入你的无线卡在High Sierra使用的旧插件才能在Mojave工作。有几个不同的kext可以做到这一点，但一般来说，我们建议避免这些卡，除非绝对必要。

**注意**:将kext注入macOS Catalina会更加不稳定，**强烈建议升级**

* **Atheros 9380**:
  * TP-Link TL-WDN4800
  * Rosewill N900
  * Atheros AR5BDT92
* **Atheros 9280**:
  * Dell DW 1525
  * Gemtek WPEA-113N
* **Atheros AR9287**:
  * Nexxt Solutions Saros 300 (APLDT300N1)
  * TP-LINK TL-WN881ND
* **Atheros AR9285**:
  * AzureWave AW-NE106
  * Rosewill RNX-N150PCe v1
  * SMC SMCWPCIeS-N
  * TP-LINK TL-WN781ND v1
  * ZyXEL NWD3105
