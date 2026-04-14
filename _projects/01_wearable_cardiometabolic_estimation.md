---
layout: page
title: wearable cardiometabolic estimation
permalink: /projects/wearable-cardiometabolic-estimation/
description: kinematics-aware self-supervised learning for wearable-based cardiorespiratory fitness estimation.
img: /assets/img/wearable_pipeline.png
importance: 1
category: research
---

This line of work focuses on estimating **cardiorespiratory fitness** and near-future physiological dynamics from wearable signals such as **PPG** and **accelerometry**.

The core idea is to move beyond purely supervised learning by using **self-supervised pretraining** to learn robust physiological representations from label-scarce data. I am particularly interested in how movement context changes the meaning of cardiovascular signals, and how representation learning can remain sensitive to both physiology and behavior.

### Main directions

- kinematics-aware self-supervised learning for wearable signals
- robust representation learning under limited clinical labels
- short-horizon forecasting of exertional / cardiorespiratory response
- bridging laboratory-grade metrics and scalable daily monitoring

### Representative materials

- [Qualifying exam slides]({{ '/assets/files/woojin_2026_qualifying_exam.pptx' | relative_url }})
- [Lab meeting slides]({{ '/assets/files/woojin_2026_lab_meeting.pptx' | relative_url }})

{% include figure.liquid loading="eager" path="assets/img/wearable_pipeline.png" title="Wearable cardiometabolic research pipeline" class="img-fluid rounded z-depth-1" %}

### Why it matters

I care about making cardiometabolic monitoring both **scalable** and **interpretable**. Wearable sensing should not stop at passive logging; it should support meaningful health understanding and, eventually, better intervention.
