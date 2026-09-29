---
title: Setting up working environment for ReactNative & Expo on WSL2
date: '2023-05-26 08:22:57'
draft: false
slug: working-with-reactnative-expo-on-wsl2
cover:
  image: farzad-p-xSl33Wxyc-unsplash--1-.jpg
  relative: true
aliases:
  - /2023/05/26/working-with-reactnative-expo-on-wsl2/
---

Windows is well known for a bad experience for JavaScript developers. Some libraries and tools aren't supported. However, Everything changed when Microsoft announced Windows Subsystem for Linux (WSL). Since then, we can work on any project in WSL without library compatibility issue.

Working with a JavaScript library like React Native on WSL is impressive, but it needs extra configuration.

In this article I will explain how to set up working environment on Windows for ReactNative & Expo.

FYI: There are WSL and WSL2. In this article, I use WSL2. Please bear in mind that when I talk about "WSL", I mean WSL2.

## 3 options of setting up

*   Running everything inside WSL
*   Running only Expo inside WSL.
*   Running only React Native inside WSL (without Expo).

## Running everything inside WSL

Running everything inside WSL means you have to run ADB, Metro, Expo bundler, and the Android emulator in WSL.

{{< figure src="image-1.png" caption="Console is connecting WSL. The emulator screen is also run inside WSL but Windows handle GUI stuff and display it on Windows side seamlessly." >}}

It worked at first. After changing something in source code, the emulator broke due to an issue related to CPU processing that I couldn't understand. Hence, I moved on to another solution.

## Running only Expo inside WSL

I run an ADB server in Windows so an emulator on Windows can communicate to ADB server. But, it means I have to tell Expo inside WSL to connect to the ADB server on Windows instead of the one on WSL client. So here is how-to.

1\. First, add these two lines to `~/.zshrc` inside WSL to set `ADB_SERVER_SOCKET` so ADB client knows ADB host server.

```bash
export WSL_HOST=$(tail -1 /etc/resolv.conf | cut -d' ' -f2)
export ADB_SERVER_SOCKET=tcp:$WSL_HOST:5037
```

2\. Next, run ADB host on Windows with extra options. `-a` tells ADB server to accept all incoming address.

```bash
adb -a nodaemon server start
```

3\. Then, start the emulator on Windows. I prefer using cli over starting Android Studio.

```bash
emulator -avd Pixel_6_API_33
```

4\. I need to forward network connection of `5554` or any using Android Emulator port from WSL to Windows.

`5554` port is initial port of Android emulator for relaying its console messages to a development tool. It can be `5556` depending on how many emulator you have connected with ADB.

```bash
socat -d -d TCP-LISTEN:5554,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5554
```

5\. Finally, I can start your Expo and run android app.

```bash
yarn start
```

#### Video

<iframe width="200" height="113" src="https://www.youtube.com/embed/WPJAxcWURUk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="running expo on wsl"></iframe>

## Running only React Native inside WSL (without Expo)

For vanilla React Native, Steps are a little bit different.

Do step 1-3 from **Running it with Expo** section, then continue following steps.

1\. First, install the app on running emulator. It needs device ID to install an app on a specific device. Run this command in WSL.

```bash
yarn android --deviceId emulator-5556
```

2\. Then, start React Native's Metro on WSL

```bash
yarn start
```

3\. Getting a WSL client's IP address. I run following command on WSL to get WSL client's IP address. React Native debugger host address has to be changed accordingly.

```bash
ifconfig
```

4\. Finally, set React Native debugger host on React Native App’s dev menu. (For Windows, press `ctrl + m`  in the app to make a dev menu shown up)

{{< figure src="image.png" >}}

### Video

<iframe width="200" height="113" src="https://www.youtube.com/embed/quxvG2Y1edE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="running react native on wsl"></iframe>

## Known issues

### Window Firewall problem

React Native and Expo seem have a problem with Windows Firewall. I have to turn my firewall off while installing app to an emulator. Running an app after installing has no problem with Firewall.

### ADB port is taken.

Sometime, the ADB port is taken by another service. In my case, I unintentionally set a Windows proxy on `5037` port. If you have similar issue, you can use following command to find which service is using the port, then stop it.

```bash
netstat -aon | findstr 5037
Stop-Process -Id [PID]
```
