# 前言

接下来你将看见**散装 Nix** 的移植版本 —— 由 **Luca Bruno**（也被称作 Lethalman）攥写的于 2014 到 2015 年发布的一系列博客文章。这些精炼的，被称之为「散装」的章节提供了一个教程式的关于 Nix 包管理器与 Nixpkgs 软件仓库的介绍。

由于散装 Nix 实在经典，Graham Christensen（也被称作 grahamc / gchristensen）领导其他贡献者在 2017 年将它移植到了当时的格式。

倘若阅读时遇到问题，请向 [nixos/nix-pills](https://github.com/NixOS/nix-pills/issues) 项目的问题追踪器报告（英文版原版）。（译注：建议在[翻译项目](https://github.com/nix-zh-team/nix-pills/issues)报告）

:::tip

前缀有`#`的命令需要以 root 权限运行。这意味着你需要以具有 root 权限的用户登陆或将此前缀更换为`sudo`。

:::

:::warning

这是 NixOS 官方主页的规定，为了更好的适应 VuePress 的原生代码高亮，翻译时将`#`前缀替换为了`sudo`。

:::