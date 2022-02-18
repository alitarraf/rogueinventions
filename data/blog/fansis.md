---
date: 2017-11-15
title: FANSIS, a Fan ANalySIS tool
tags: ['App', 'fan', 'Python']
summary: My first real web app.
---

In paper DOI: 10.1243/09544062JMES1196 by Dr Epple on "Design of radial impellers: a combined extended
analytical and numerical method", a method is described for the analysis of centrifugal fan. Dr Epple suggest creating a spreadsheet as a conceptual analysis for a fan design.

After creating a spreadsheet with all the relevant equations, I got frustrated with the constant editing that needs to be done on excel, and decided to implement the the design equation code in python. I found out that I can create a browser compatible user interface using the Dash by Plotly library.

The end result is an easy to use web application where you can quickly see the effect of each change of input parameter, on the output parameters. The results consists of a set of recommended fan geometry coordinate, a theoretical expected flow rate and pressure rise along with power consumption for the designed fan.

[Try the DASH app here](http://fathomless-eyrie-98760.herokuapp.com/)

![fansis](/static/images/fansis.gif)
