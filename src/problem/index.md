---
title: Problem Overview
description: 'What are the current barriers to data linkage'
permalink: /problem/
layout: layouts/page
nav: cgf
eleventyNavigation:
  parent: cgf-problem
  key: cgf-problem-main
  order: 1
  title: Problem Overview
sidenav: false
sticky_sidenav: true
---


# Individual-level health data linkage holds promise for innovative research...

People usually have health data held in multiple systems. Examples include clinical data from an electronic health record (EHR), claims from a health insurer, data from wearables, and data collected during research studies. This “individual-level health data” from different datasets can be matched and linked, creating a combined dataset with more complete information. 

Linking health data from multiple datasets creates a fuller picture of the person’s health over time. When researchers use linked data, they can better understand the diverse factors contributing to health and illness. This drives innovative research questions and accelerates discovery. But attempting to link data can have significant challenges that researchers cannot solve on their own.

Some linkages of individual-level health data are happening today. For example, the All of Us Research Program links data from EHRs, patient surveys, and genomic repositories for research. Hundreds of studies have used the All of Us linked data for scientific breakthroughs. However, most datasets have never been linked and many promising linkages remain out of reach. 


## ...but rich, complex data linkage can be challenging.

While some challenges to linking datasets are technological, this framework focuses on governance challenges. 

        
      {% render 'summary-box.html', title: 'Key Term', body: '<b>Data governance</b> is the policies, processes, and decisions that dictate how data can be managed and used to protect an individual’s privacy. It is expressed through <b>governance rules</b> that express requirements for data access, sharing, linkage, use and dissemination.' %}

While there may be many commonalities between datasets’ governance, each dataset may implement shared rules in different ways, may have unique rules, and may have rules that conflict with the rules of other datasets.

**Complex data linkage** arises when various aspects of data governance makes the linkage especially difficult. Connecting multiple datasets (three or more), for example, is a type of complex linkage, because of the challenges blending the governance of 3 different datasets. 

## Investigators and dataset holders need a new way to overcome challenges and link data for research.

Investigators and Dataset Holders share a common goal to use data linkages to drive research that can improve health and save lives. Linkage governance as it stands today can make innovative complex linkages hard to create. 

      {% render 'summary-box.html', title: 'Key Term', body:'<b>Investigators</b> are individuals responsible for the design, conduct, reporting, and scientific and ethical integrity of a research study. Investigators play a critical role ensuring the research is compliant with laws, regulations, and policies.' %}

      {% render 'summary-box.html', title: 'Key Term', body:'<b>Dataset holders</b> are organizations with the authority to make decisions about the access, sharing, linkage, and use of specific datasets.' %}

For investigators, governance processes are often fragmented, requiring time-consuming and duplicative work, and they can wait a long time for answers. Challenges can include:

- Time and effort needed to develop separate requests for multiple dataset holders
- Asynchronous review processes that researchers must manage
- No process or tools to integrate the sets of rules that govern the linked dataset 
- Conflicting governance rules may make linkage impossible without a way to reconcile the conflicts.

Dataset holders operate and participate in the governance processes and are responsible for ensuring the compliance of their data. Complex data linkages create different challenges for them:

- No coordination with other Dataset Holders to codesign complex linkages that comply with governance rules.
- Time and effort to understand unfamiliar linkage methods and authorize software tools needed to complete complex linkages
- Time and effort needed to modify existing processes to respond to complex requests

    {% render 'callout.html', title: 'Note', body:'This project conducted a Current State Assessment (CSA) to learn about the governance policies and practices of three dataset holders: N3C, PCORnet, and VRDC. The assessment and its findings can be accessed [here].' %}

