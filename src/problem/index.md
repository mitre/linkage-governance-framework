---
title: Problem Overview
description: 'What are the current barriers to data linkage'
permalink: /problem/
layout: layouts/fullpage
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

<section>
  <div class="grid-row">
    <div class="grid-col-8">

People usually have health data held in multiple systems. Examples include clinical data from an electronic health record (EHR), claims from a health insurer, data from wearables, and data collected during research studies. Making sure these data are, when appropriate, reliably available and transformed into actionable evidence through research and analysis requires is essential for patient-centered outcomes research.  

When this “individual-level health data” from different datasets can be matched and linked, if allowed by consent and when privacy is appropriately protected, the combined dataset has more complete information and a fuller picture of the diverse factors contributing to the person’s health and illness over time. Linking data can drive innovative research questions and accelerates discovery, but can have significant challenges that resesarchers might not anticipate. 

Some linkages of individual-level health data are happening today. For example, the _All of Us_ Research Program asks permission from its participants to link data from EHRs, surveys, and genomic repositories for research. Hundreds of studies have used the _All of Us_ linked data for scientific breakthroughs. However, most datasets have never been linked and many promising safe and appropriate linkages remain out of reach.  
    </div>
    <div class="grid-col-4">

      {% render 'summary-box.html', title: 'Key Term', body: '<b>Patient-centered outcomes research</b> aims to generate high-quality evidence about the effectiveness of treatments, services, and other health care interventions on the full range of outcomes that patients, caregivers, clinicians, policymakers, and other stakeholders have identified as important.  ' %}
          </div>
  </div>    

  <div class="grid-row">
    <div class="grid-col-8">

## ...but rich, complex data linkage can be challenging.

While some challenges to linking datasets are technological, this framework focuses on governance challenges. 

While there may be many commonalities between datasets’ governance, each dataset may implement shared rules in different ways, may have unique rules, and may have rules that conflict with the rules of other datasets. 

**Complex data linkage** arises when various aspects of data governance makes the linkage especially difficult. Connecting multiple datasets (three or more), for example, is a type of complex linkage, because of the challenges blending the governance of 3 different datasets. 
    </div>
    <div class="grid-col-4">

      {% render 'summary-box.html', title: 'Key Term', body: '<b>Data governance</b> is the policies, processes, and decisions that dictate how data can be managed and used. Key to governance are consideration of data security and individual privacy. It is expressed through <b>governance rules</b> that express requirements for data access, sharing, linkage, use and dissemination.' %}
    </div>
  </div>      
</section>

## Investigators and dataset holders need a new way to overcome challenges and link data for research.

Investigators and dataset holders share a common goal to use data linkages to drive research that can improve health and save lives. Linkage governance as it stands today can make innovative complex linkages hard to create.  

<section>
  <div class="grid-row">
    <div class="grid-col-8">

{% image_with_class "assets/resources/img/investigator.png" "actor-icon" "Icon of Investigator" %} For investigators, governance processes are often fragmented, requiring time-consuming and duplicative work, and they can wait a long time for answers. Challenges can include:

- Time and effort needed to develop separate requests for multiple dataset holders
- Asynchronous review processes that researchers must manage
- No process or tools to integrate the sets of rules that govern the linked dataset 
- Conflicting governance rules may make linkage impossible without a way to reconcile the conflicts.

    </div>
    <div class="grid-col-4">
      {% render 'summary-box.html', title: 'Key Term', body:'<b>Investigators</b> are individuals responsible for the design, conduct, reporting, and scientific and ethical integrity of a research study. Investigators play a critical role ensuring the research is compliant with laws, regulations, and policies.' %}
    </div>
  </div>      
</section>


<section>
  <div class="grid-row">
    <div class="grid-col-8">

{% image_with_class "assets/resources/img/dataset-holder.png" "actor-icon" "Icon of dataset holder" %}  Dataset holders are responsible for ensuring compliance with the usage rules for their dataset. Complex data linkages create different challenges for them:

- No coordination with other dataset holders to codesign complex linkages that comply with governance rules
- Time and effort to understand unfamiliar linkage methods and authorize software tools needed to complete complex linkages
- Time and effort needed to modify existing processes to respond to complex requests

    </div>
    <div class="grid-col-4">
      {% render 'summary-box.html', title: 'Key Term', body:'<b>Dataset holders</b> are organizations with the authority to make decisions about the access, sharing, linkage, and use of specific datasets.' %}
          </div>
  </div>      
</section>

      
    {% render 'callout.html', title: 'Note', body:'This project conducted a Current State Assessment (CSA) to learn about the governance policies and practices of three dataset holders: N3C, PCORnet, and VRDC. The assessment and its findings can be accessed [here](/resources#current-state-assessment).' %}

