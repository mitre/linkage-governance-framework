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

## How would an investigator use this framework?
Investigators could design and execute powerful linkage studies that are not feasible without a Common Governance Process, enabling them to link data from multiple datasets: 

- Their request package can go to a single Coordinating Body that early feedback for assessing completeness and a thorough plan for linkage implementation. 
- Investigators can refine or modify their study earlier in order to increase their likelihood of approvals because of clear, consistent guidance across Dataset Holders (multiple Dataset Holders simultaneously). 
- The Coordinating Body works on behalf of the Investigator and Requesting Institution, directly with the Dataset Holders to identify and harmonize conflicts in governance rules for feasible studies, resulting in a single, clear set of rules. 
- Studies approvals happen faster because review processes are synchronized and coordinated rather than sequential. 
- Linking more datasets doesn’t create more administrative burden for the Investigator. 

## How would a dataset holder use this framework?

[tbd...]

## How would implementing this framework ultimately benefit patients?

[tbd...]

  {% for story in collections.userstory %}
    <h2>
        <a href="{{ story.url}}"> {{story.data.title}}</a></h2>
        <p>{{ story.data.description }}</p>

  {% endfor %}
