# 支持/不支持的芯片组

在macOS中，无论是哪种类型，支持的硬件数量都是有限的，无线网卡也不例外。

## 支持的芯片组

### Big Sur (11) 和 Monterey (12) 和更老的

* BCM943602
* BCM94360
* BCM94352
* BCM94350

### Catalina (10.15) 和更老的

* BCM943224
* BCM94331
  * 可能需要你在运行macOS Catalina时强制加载IO80211Family.kext;更多细节请参阅OpenCore中的`Kernel -> Force`
* 所有在 Big Sur 提到的都在 Catalina 得到支持

### Mojave (10.14) 和更老的

* BCM94322
* 所有在 Catalina 和更新版本中提到的都在Mojave中得到支持

### High Sierra (10.13) 和更老的

* AR242x
* AR542x
* AR5416
* AR5418
* AR9280 - AR5BHB92
* AR9285 - AR5B95
* AR9287 - AR5B97
* AR9380 - AR5BXB112
* 所有在Mojave和更新版本中提到的都在High Sierra中得到支持

### El Capitan (10.11) 和更老的

* BCM4311
* BCM4318
* BCM4306
* BCM4309
* BCM4321
* BCM4322
* 所有在High Sierra和更新版本中提到的内容在El Capitan中也得到了支持

# 不支持的芯片组

## Broadcom

* BCM4312
* BCM4313
* BCM4356
* BCM43142
* BCM43228

## Atheros

* AR5424

## Intel

目前macOS中还没有官方支持的Intel芯片组，但是itlwm在这方面已经做了很多工作:[我的Intel Wi-Fi在哪里?](../misc/intel.md):
