---
date: 2017-06-11 05:20:05+00:00
title: Datalogger and AC switch
tags: ['Arduino', 'Electronics', 'build']
summary: A DIY data logger.
---

### Datalogger

Used Adafruit datalogger shield with arduino and added an SSR relay to be able switch on and off AC current.
![datalogger](/static/images/dataloger-relay.jpg)

### Application

Application includes any household items rated less than 1A. At the same time data can be saved through analog or digital inputs.
I used this to turn on and off an electric motor every 15seconds, while reading rotational speed and logging the data with a time stamp.
