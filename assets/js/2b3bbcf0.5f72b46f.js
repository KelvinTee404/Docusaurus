"use strict";(self.webpackChunkdocusaurusdemo_k=self.webpackChunkdocusaurusdemo_k||[]).push([[5907],{6422:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"sec2/rzg2lsetup","title":"RZ/G2L Setup","description":"Setup of Renesas RZ/G2L Board.","source":"@site/docs/sec2/rzg2lsetup.md","sourceDirName":"sec2","slug":"/sec2/rzg2lsetup","permalink":"/Docusaurus/docs/sec2/rzg2lsetup","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sec2/rzg2lsetup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"RZ/G2L Setup","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Section 2","permalink":"/Docusaurus/docs/category/section-2"},"next":{"title":"helloworld","permalink":"/Docusaurus/docs/sec2/helloworld"}}');var t=r(4848),i=r(8453);const o={sidebar_label:"RZ/G2L Setup",sidebar_position:1},c="RZ/G2L Setup",d={},a=[{value:"Building Base QT Image",id:"building-base-qt-image",level:2},{value:"Write to SD Card",id:"write-to-sd-card",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"rzg2l-setup",children:"RZ/G2L Setup"})}),"\n",(0,t.jsx)(n.p,{children:"Setup of Renesas RZ/G2L Board."}),"\n",(0,t.jsx)(n.h2,{id:"building-base-qt-image",children:"Building Base QT Image"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.renesas.com/en/document/gde/smarc-evk-rzg2l-rzg2lc-rzg2ul-linux-start-guide-rev104?r=1467981",children:"Linux Start Up Guide"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="Writing image to SD card (Change device accordingly)"',children:"$ sudo apt-get install bmap-tools\n$ sudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sdb\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker images\ndocker ps -a\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker start my_container_for_20.04\ndocker exec -it my_container_for_20.04 /bin/bash\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ sudo apt-get update\n$ sudo apt-get install gawk wget git-core diffstat unzip texinfo gcc-multilib \\\nbuild-essential chrpath socat cpio python python3 python3-pip python3-pexpect \\\nxz-utils debianutils iputils-ping libsdl1.2-dev xterm p7zip-full libyaml-dev \\\nlibssl-dev bmap-tools\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo apt update\nsudo apt install software-properties-common\n\nsudo apt-add-reporitory 'deb https://apt.kitware.com/ubuntu/ bionic main'\nsudo apt update\nsudo apt install cmake\n\nsudo apt install meson ninja-build\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.renesas.com/en/products/microcontrollers-microprocessors/rz-mpus/rzg-linux-platform/rzg-marketplace/verified-linux-package/rzg-verified-linux-package#Download",children:"RZ/G Verified Linux Package \uff085.10-CIP"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd <work dir> \nTEMPLATECONF=$PWD/meta-renesas/meta-rzg2l/docs/template/conf/ source poky/oe-init-build-env build\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"MACHINE=smarc-rzg2l bitbake core-image-qt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"write-to-sd-card",children:"Write to SD Card"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd build/tmp/deploy/images/smarc-rag2l/\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"core-image-qt-smarc-rzg2l.wic.gz\ncore-image-qt-smarc-rzg2l.wic.bmap\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"sudo fdisk -l       # check device ID of SD card \numount /dev/sdc1    # suppose SD card mounted on /dev/sdc1 and /dev/sdc2, change according to mounted port\numount /dev/sdc2\nsudo bmaptool copy core-image-qt-smarc-rzg2l.wic.gz /dev/sdc\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);