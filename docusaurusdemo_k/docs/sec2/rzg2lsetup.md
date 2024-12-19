---
sidebar_label: 'RZ/G2L Setup'
sidebar_position: 1
---

# RZ/G2L Setup

Setup of Renesas RZ/G2L Board.

## Building Base QT Image

[Linux Start Up Guide](https://www.renesas.com/en/document/gde/smarc-evk-rzg2l-rzg2lc-rzg2ul-linux-start-guide-rev104?r=1467981)

```jsx title="Writing image to SD card (Change device accordingly)"
$ sudo apt-get install bmap-tools
$ sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sdb
```

```
docker images
docker ps -a
```

```
docker start my_container_for_20.04
docker exec -it my_container_for_20.04 /bin/bash
```

```
$ sudo apt-get update
$ sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \
build-essential chrpath socat cpio python python3 python3-pip python3-pexpect \
xz-utils debianutils iputils-ping libsdl1.2-dev xterm p7zip-full libyaml-dev \
libssl-dev bmap-tools
```

```
sudo apt update
sudo apt install software-properties-common

sudo apt-add-reporitory 'deb https://apt.kitware.com/ubuntu/ bionic main'
sudo apt update
sudo apt install cmake

sudo apt install meson ninja-build
```

[RZ/G Verified Linux Package （5.10-CIP](https://www.renesas.com/en/products/microcontrollers-microprocessors/rz-mpus/rzg-linux-platform/rzg-marketplace/verified-linux-package/rzg-verified-linux-package#Download)

```
cd <work dir> 
TEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build
```

```
MACHINE=smarc-rzg2l bitbake core-image-qt
```

## Write to SD Card

```
cd build/tmp/deploy/images/smarc-rag2l/
```

```
core-image-qt-smarc-rzg2l.wic.gz
core-image-qt-smarc-rzg2l.wic.bmap
```

```
sudo fdisk -l       # check device ID of SD card 
umount /dev/sdc1    # suppose SD card mounted on /dev/sdc1 and /dev/sdc2, change according to mounted port
umount /dev/sdc2
sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sdc
```