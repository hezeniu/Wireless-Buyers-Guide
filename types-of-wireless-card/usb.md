# USB 卡

虽然这是无线最糟糕的选择，但没有多少人可以选择避免，因为他们的无线卡被焊接，或者不想打破保修期来更换他们的卡。

需要记住的事情:

* 像 AirDrop, Handoff等功能可能不会起作用
* 不能保证100%工作
* 睡眠很容易中断
* 需要一个单独的蓝牙适配器
* 大多数卡使用制作粗糙的32位应用程序来连接wifi(你需要依赖制造商为Catalina更新他们的应用程序)
* 恢复中没有网络支持

考虑到这些问题，很难推荐USB无线网卡，但还是有希望的:

# [无线USB适配器](https://github.com/chris1111/Wireless-USB-Adapter) 和 [无线USB Big-Sur适配器](https://github.com/chris1111/Wireless-USB-Big-Sur-Adapter)

虽然不是完美的，但这可能只是我们可以接近的“好的”USB无线，因为它保持最新的 [chris1111](https://github.com/chris1111)(So没有32位应用程序垃圾)，并支持各种芯片。在macOS 10上使用无线usb适配器。macOS 11和12上的无线usb大尺寸适配器。

我已经列出了所有已知良好的芯片组，您可以看看您的芯片组是否与这些芯片组匹配

* **RTL8188CUS**:

  * Asus USB-N 10 Nano/N150
  * TRENDnet N150 Micro

* **RTL8192CU**:

  * EDIMAX- EW-7722UTn V2
  * EDIMAX N300

* **RTL8192EU**:

  * TL-WN823N v2
  * TL-WN823N v3
  * TL-WN821N v6

* **RTL8188EUS**:

  * TL-WN725N v3
  * TL-WN722N v3

* **RTL8811AU**:

  * Archer T2U NANO

* **RTL8812BU**:

  * Archer T4U V3

* **RTL8814AU**:

  * Archer T9UH V2

* **RTL8812AU**:

  * Linksys WUSB6300

# [USB Wireless Utility](https://github.com/chris1111/USB-Wireless-Utility) 和 [D-Link Utility Package](https://github.com/chris1111/D-LinkUtility-Package)

就像 [Wireless-USB-Adapter-Clover](https://github.com/chris1111/Wireless-USB-Adapter-Clover)一样，WIFI-Dlink允许支持相当多的联发科/雷凌卡，但由于是32位应用程序，它在AMD系统上不支持。有一个更新版本的Catalina，它是64位和完美的AMD系统以及:[WIFI-Dlink Catalina-Panel](https://github.com/chris1111/WIFI-Dlink-Catalina-Panel)

* RT3572
* RT3072
* RT3070
* RT3573
* MT7610
* MT7610
* MT7610
* RT5370
* RT2870
* RT3071
* RT2770
* RT3573
* RT5572
* RT3573
* RT3573
* RT5572
* RT3572
