---
sidebar_label: 'Ubuntu PC Setup'
sidebar_position: 1
---

# Ubuntu PC Setup

Comprehensive links to start up the ubuntu mini PC.

1. Ubuntu desktop tutorials
    1. [install ubuntu desktop](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)
    2. [mirror ubuntu download](https://mirror.twds.com.tw/ubuntu-releases/)
    3. [OpenSSH server](https://documentation.ubuntu.com/server/how-to/security/openssh-server/)
    4. [Note](https://m11158002.github.io/moil-renesas/docs/note/general/openssh)
2. Docker tutorials
    1. [install docker engine part1](https://docs.docker.com/engine/install/ubuntu/)
    2. [install docker engine part2](https://docs.docker.com/engine/install/linux-postinstall/)
    3. [docker cheat sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
    4. [Note](https://m11158002.github.io/moil-renesas/docs/note/general/docker)
3. vscode tutorials
    1. [install vscode](https://code.visualstudio.com/download)
    2. [source control](https://code.visualstudio.com/docs/sourcecontrol/overview)
    3. [Remote](https://code.visualstudio.com/docs/remote/remote-overview)
    4. [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
4. git Tutorials
    1. [Install git](https://git-scm.com/downloads)
    2. [Install git-lfs](https://github.com/git-lfs/git-lfs?utm_source=gitlfs_site&utm_medium=installation_link&utm_campaign=gitlfs#installing)
    3. [git cheat sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
    4. [github training manual](https://githubtraining.github.io/training-manual/book.pdf)
5. markdown Tutorials
    1. [markdown guide](https://www.markdownguide.org/)
6. docusaurus Tutorials
    1. [install nodejs](https://nodejs.org/en/download/package-manager)
    2. [install docusaurus](https://docusaurus.io/docs/installation)

```
cd C:\Users\User\.ssh
icacls config /inheritance:r /grant User:(F)
```

```
type C:\Users\User\.ssh\id_ed25519.pub | ssh ret@192.168.2.166 "cat >> .ssh/authorised_keys"
```