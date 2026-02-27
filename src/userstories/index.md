---
title: Use Cases
description: 'Example user stories for the Linkage Governance Framework'
permalink: /userstories/
layout: layouts/page
nav: cgf
tags: cgf
eleventyNavigation:
  parent: cgf-userstories
  key: cgf-userstories-main
  order: 1
  title: User Stories
sidenav: true
sticky_sidenav: true
---

# Example User Stories

## How would a researcher use this framework?

## How would a dataset holder use this framework?

## How would implementing this framework ultimately benefit patients?

This page will describe example user stories for the Linkage Governance Framework. A summary of each use case will be here, with a full description on another page.

These use cases will likely describe how each of the three roles (investigator at a requesting institution, dataset holder and coordinating body member) would participate in the governance process.

These pages could also describe operational exercises, or realistic scenarios which demonstrate how the Linkage Governance Framework solves linkage issues.

  {% for story in collections.userstory %}
    <h2>
        <a href="{{ story.url}}"> {{story.data.title}}</a></h2>
        <p>{{ story.data.description }}</p>

  {% endfor %}
