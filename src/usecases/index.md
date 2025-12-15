---
title: Use Cases
description: 'Example use cases for the Common Governance Framework'
permalink: /usecases/
layout: layouts/page
nav: cgf
tags: cgf
eleventyNavigation:
  parent: cgf-usecases
  key: cgf-usecases-main
  order: 1
  title: Use Cases
sidenav: true
sticky_sidenav: true
---

# Example Use Cases

This page will describe the example use cases for the Common Governance Framework. A summary of each use case will be here, with a full description on another page.

These use cases will likely describe how each of the three roles (investigator at a requesting institution, dataset holder and coordinating body member) would participate in the governance process.

These pages could also describe operational exercises, or realistic scenarios which demonstrate how the Common Governance Framework solves linkage issues.

  {% for case in collections.usecase %}
    <h2>
        <a href="{{ case.url}}"> {{case.data.title}}</a></h2>
        <p>{{ case.data.description }}</p>

  {% endfor %}
