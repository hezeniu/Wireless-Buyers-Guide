# 蓝牙支持

因此，在macOS中使用蓝牙时，它可能会变得非常混乱，不知道实际支持什么，什么不支持。

## 支持的蓝牙芯片组

我本来打算手动查找每个支持的模型，但用户 [MarkVillacampa](https://www.tonymacx86.com/members/markvillacampa.1790473/) 已经做了很好的工作，所以我将链接到他的发现

* **[蓝牙列表](https://www.tonymacx86.com/threads/guide-how-to-get-bluetooth-and-wifi-working.275962/)**
  * IOGEAR Bluetooth 4.0(GBU521)
  * ASUS USB-BT400
  * Insignia NS-PCY5BMA
  
**华硕和联想说明**:在第七代和更新的笔记本电脑芯片组中，蓝牙已集成到PCH中，这些oem没有任何USB轨道连接到他们的A/E插槽。这意味着你需要在主板上焊接新的蓝牙头，或者将USB电缆路由到现有的端口

## 那么为什么蓝牙可以在我的英特尔卡上使用呢

这有点复杂，涉及到IOkit以及它如何处理不同的设备。蓝牙实际上在与系统的交互方面非常简单，由于它通常是通过USB运行的，一般设备可以很容易地连接到IOKit，并半原生地工作(通常会失去Handoff, AirDrop等)。另一方面，Wi-Fi要复杂得多，因为需要IO80211Family kext对设备提供明确的支持，所以只有Broadcom/Atheros卡才有可能工作。

因此，如果你从Windows重新启动到macOS，卡上的固件可能会卡住，让你的卡上暂时的蓝牙支持。为了确保它能够持续存在，你可以使用一个注入kext的固件，就像在 [IntelBluetoothFirmware repo](https://github.com/zxystd/IntelBluetoothFirmware)上找到的那样。

## BIOS中的蓝牙

所以为了在BIOS中支持蓝牙，你需要一个支持HID代理的蓝牙设备。HID代理的想法是创建一个最小的蓝牙栈，然后用它欺骗BIOS，让它认为你的蓝牙键盘实际上是USB键盘，因为没有任何固件真正实现了蓝牙。

所有苹果卡都原生支持这个功能，但你需要在其他设备上具体情况下进行搜索。

## 在不同操作系统之间保留蓝牙密钥

这主要是针对只有一个蓝牙配置文件的设备，当切换操作系统时可能有点令人沮丧，我们将我们的本地Frewt boll再次拯救我们!

* **[双启动蓝牙设备](https://github.com/dortania/clover-laptop-guide/blob/master/extras/dual-booting-with-bluetooth-devices.md)**
