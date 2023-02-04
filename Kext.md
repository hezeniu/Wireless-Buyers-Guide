# 何时和使用什么kext

* [Broadcom](#broadcom)
* [Intel](#intel)
* [Atheros](#atheros)

## Broadcom

### [AirportBrcmFixup](https://github.com/acidanthera/AirportBrcmFixup)

许多Broadcom卡都需要这个功能来修复wifi问题，但不是所有的卡都需要这个功能，一般使用非苹果公司生产的无线网卡时都需要这个功能。这还增加了将旧的Broadcom kext注入到新版本macOS的功能。

* 注意:Apple AirPort和Fenvi卡不需要这个kext

### [BrcmPatchRAM](https://github.com/acidanthera/BrcmPatchRAM/releases)

由于固件的处理方式，所有非苹果公司生产的无线网卡都需要安装。这实际上是一个包含多个kext的包:

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

注意:

* Apple AirPort和Fenvi卡不需要这些kext
* OpenCore顺序:BrcmBluetoothInjector或BlueToolFixup - > BrcmFirmwareData - > BrcmPatchRAM

## Intel

### [itlwm](https://github.com/OpenIntelWireless/itlwm)

* [itlwm](https://github.com/OpenIntelWireless/itlwm)
  * itlwm.kext使用苹果的IOEthernet，比AirportItlwm.kext更稳定，并且完全基于开源资源
  * AirportItlwm.kext使用苹果的IO80211，其稳定性不如itlwm.kext，但支持某些连续性功能
  * 不幸的是，两个kext都不支持AirDrop;有关功能和限制，请参阅这里:[OpenIntelWireless](https://openintelwireless.github.io/)

### [IntelBluetoothFirmware](https://github.com/OpenIntelWireless/IntelBluetoothFirmware/releases)

当与英特尔无线网卡配对时，添加蓝牙支持到macOS

## Atheros

### [High Sierra's IO80211Family](https://github.com/khronokernel/IO80211-Patches/blob/main/10.13.6-High-Sierra-Kexts/IO80211HighSierra.kext.zip)

所有在Mojave中支持的Atheros芯片组都需要这个kext，包括:

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112

### [ATH9KFixup](https://github.com/chunnann/ATH9KFixup)

与airport40配对以修复许多不支持的Atheros卡的支持，类似于AirportBrcmFixup的想法:

* AR946X (AR9462 & AR9463)
* AR9485
* AR9565

### [AthBluetoothFirmware](https://github.com/zxystd/AthBluetoothFirmware/releases)

用于确保蓝牙固件在macOS中正确加载
