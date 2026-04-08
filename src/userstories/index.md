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

# User Stories

The Linkage Governance Framework provides a vision of the future and a Common Governance Process that can enable complex data linkages, where appropriate, that are not currently possible. The use of investigator and dataset holder personas, communicated through user stories, illustrate the future envisioned by the framework and how it can help set the stage for discoveries to happen faster. 


  {% for story in collections.userstory %}
    <h2><a href="{{ story.url}}"> {{story.data.title}}</a></h2>
    <h3>{{store.data.subtitle}}</h3>
    <p>{{ story.data.description }}</p>

  {% endfor %}

