# 第 1 章：尝试 Nix 的理由

## 1.1. 简介

欢迎阅读「散装 Nix」系列的第一篇。Nix 是一个纯粹函数式的包管理器，也是 POSIX 的部署系统。

描述 Nix、NixOS 和它们的相关项目是什么的文档浩如烟海。与它们不同的是，本文旨在说服你尝试 Nix。虽然说不一定非要安装 NixOS，但我认为 NixOS 是使用 Nix 构建整个操作系统的一个实例。

## 1.2. 本系列的初衷

[Nix](https://nixos.org/nix/manual/)、[Nixpkgs](https://nixos.org/nixpkgs/manual/) 与 [NixOS](https://nixos.org/nixos/manual/) 都有自己的手册；[wiki](https://nixos.wiki/wiki/Main_Page) 也是用于阐明 Nix / NixOS 如何工作、如何使用还有许多用它们可以做的有趣的事情的优秀资源。但在一开始，它们可能会让你觉得隐藏在荧幕后上演的魔法有些难以掌握。

本系列目标于补足现有的正式的文档中的阐述。

和它的名字一样，我尽量让下面的 Nix 的描述「散装」。

## 1.3. 不那么纯粹的函数式

广泛使用的包管理器（像是 [dpkg](https://wiki.debian.org/dpkg)、[rpm](http://www.rpm.org/) 等等）都会改变系统的全局状态。这意味着倘若一个包 **foo-1.0** 在 `/usr/bin/foo` 安装了一个软件，就无法再用同样的方法去安装 **foo-1.1**，除非你改变安装的路径或