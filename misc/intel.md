# 我的英特尔Wi-Fi在哪里?

所以这是一个有趣的时刻，我们终于在macOS上获得了英特尔Wi-Fi kext的关注。

* [itlwm](https://github.com/OpenIntelWireless/itlwm)
  * itlwm.kext使用苹果的IOEthernet，比AirportItlwm.kext更稳定，完全基于开源资源
  * AirportItlwm.kext使用苹果的IO80211，其稳定性不如itlwm.kext，但支持某些连续性功能
  * 不幸的是，两个kext都不支持AirDrop;有关功能和限制，请参阅这里: [OpenIntelWireless](https://openintelwireless.github.io/)
