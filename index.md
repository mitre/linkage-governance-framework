---
permalink: /
title: Common Governance Framework Visual Model
layout: layouts/default
nav: cgf
eleventyNavigation:
  key: cgf
  order: 1
  title: About this guide
description: Common Governance Framework for Linking Individual-level Health Data for Research
---

<div class="usa-section layout--sections">
  <section class="usa-prose grid-container section usa-section section--inbound">

# Common Governance Process to Link Individual-level Health data for Research

Linking individual-level health data across data sources to connect complementary data types increases the patterns and interrelationships that a researcher may explore to accelerate discoveries for prevention, diagnostics, and treatments. Current biomedical research infrastructure lacks a common governance approach that supports linking data for research, including studies of cancer and patient-centered outcomes research. 

## What is the common governance framework?

The Common Governance Framework to Link Individual-level Health Data for Research (the Common Governance Framework) is a structured approach for seeking approval from Dataset Holders and harmonizing governance rules across datasets to enable safe and secure linkage of individual-level health data for research. The Common Governance Framework is designed for complex linkages where governance makes the linkage of multiple datasets especially difficult. It aims to accelerate access to data by reducing the burden of adjudicating governance conflicts and gaining required approvals. 

{% image_with_class "assets/resources/img/placemat.png" "img96ex" "Diagram of Common Governance Framework" %}

The Common Governance Framework is a proof of concept that requires testing for feasibility, practicality, scalability, and effectiveness. Lessons learned from testing this new approach and process will be used to further refine and enhance the framework with the eventual goal of full-scale implementation and widespread availability across research communities.

## What Does Linking Individual-level Health Data Mean?

Linkage and linking data are not terms with single consensus definitions. This Playbook is focused on linking individual-level health data, which is defined as health-related person-level data that is found in electronic health records (EHRs), research repositories, registries, and other data systems and may or may not include **protected health information (PHI)** or **personally identifiable information (PII)**.

An individual (patient) often has relevant health data in multiple independent datasets. These **“originating” datasets** can be EHRs that hold clinical records from doctor or hospital visits, national or state health tracking systems such as cancer registries, or research data repositories that hold data from participation in research studies. Individual-level linkage in this Playbook refers to bringing the information present in disparate originating datasets together at an individual level within a resulting linked dataset. This requires recognizing or matching the same individual across the originating datasets. Many methods exist to match individuals across the originating datasets. Some methods require shared identifiers such as names, addresses, dates of birth, and social security numbers. Other methods use common de-identified tokens that are generated from identifiers and known only to the Dataset Holder and an honest broker (e.g., privacy-preserving record linkage or PPRL). For either method, the resulting linked dataset may or may not remove all PII and/or PHI from the originating datasets.

By combining data elements at the individual level from all originating datasets, the resulting linked dataset will contain more complete information about an individual. However, the resulting linked dataset will not necessarily include all data elements present in originating datasets. Additionally, the resulting linked dataset will usually include fewer individuals than those present across the originating datasets. Each originating dataset has an independent set of participants so complete information in the resulting dataset will only be available for those individuals present in all originating datasets (the overlap of the originating datasets). The number of individuals in the resulting linked dataset may be further reduced when applying inclusion and/or exclusion criteria such as a specific type of cancer or a desired age range. The size of the study population (number of individuals in the linked dataset) is of crucial importance to the Investigator’s ability to draw statistically meaningful conclusions.

Once created, linked datasets may be linked with additional data (subject to the governance rules of the linked datasets) to create subsequent linked datasets. As such, data that Investigators want to link may already be a product of previous linkages. These further linkages are only possible if identifying information for the individual is maintained either in the linked dataset or by an honest broker for the linked dataset.

  </section>
</div>