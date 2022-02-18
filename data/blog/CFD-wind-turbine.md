---
author: Ali Tarraf
comments: true
date: 2016-12-10
title: CFD of a vertical wind turbine with ANSYS
tags: ['CFD', 'ANSYS']
draft: true
summary: Simulation of the wind.
---

In this project I am simulating a Vertical Axis Wind Turbine (VAWT) under an imposed rotor rotation to find the pressure profile across the turbine. This was an exercise to test my Computational Fluid Dynamic (CFD) skills. The design is inspired from the Vortexis 1kW VAWT. More information about Vortexis can be found here http://www.vortexis.com/

Data:

- Model K-Epsilon turbulence model
- Viscosity enabled
- Imposed 60 RPM on rotor, matching wall contact boundary conditions
- Atmospheric pressure boundary conditions
- Mesh is refined to capture boundary layer around airfoils

![Resized_mesh](/static/images/Resized_mesh.png)

A simulation video of the rotating turbine with the pressure profile distribution can be seen below:

https://youtu.be/PgAnvrNU300
