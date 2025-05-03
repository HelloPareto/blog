---
title: Designing Robust Human Studies for AI Safety Evaluations
layout: post
date: 2024-12-09
image: "https://i.imgur.com/73GCYak.png"
description: A comprehensive guide to identifying vulnerabilities in AI models through systematic jailbreaking research, exploring methodologies, challenges, and potential defenses.
category: Ethics in AI
author: Ayush Parti
id: QmxvZ1Bvc3ROb2RlOmQ0YTk4YTViLThjNjUtNGIxYy05ODFjLTVhOGY2YzFkNDRlMw==
slug: human-studies-for-ai-safety-evals
ctaText: How can Pareto help you design your safety evaluation?
mainImage: "https://i.imgur.com/73GCYak.png"
categoryId: QmxvZ0NhdGVnb3J5Tm9kZTo2NjU3YmRkNS0xMTZjLTQyOTktYTExMy05YWVlYmJjMWRlZDY=
authorId: VXNlck5vZGU6ZGFjY2ViOTgtY2U1Ny00NDJhLTg0NDgtOGZlZGQzZjk1NmU5
authorFirstName: Ayush
authorLastName: Parti
relatedArticles:
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjAyNDM1MmFlLTczMzMtNGIzNC05YmUyLWI3NjViMjlkNWJkMw==
    title: "Leveraging OpenAI o1's \"Deep Thinking\" Capabilities Effectively"
    slug: openai-o1-cot
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmVjN2E5ODg0LTQ2YTQtNDkxYS1iMjJkLTE3ZjllZTk1YmFjZg==
    title: The Ultimate Guide to Retrieval-Augmented Generation (RAG)
    slug: retrieval-augmented-generation
    categoryName: Data Labeling
seoTitleTag: Designing Robust Human Studies for AI Safety Evaluations
seoMetaDescription: A comprehensive guide to identifying vulnerabilities in AI models through systematic jailbreaking research, exploring methodologies, challenges, and potential defenses.
publishedOn: "2024-12-09T21:17:12.283451+00:00"
updatedAt: "2024-12-09T21:19:24.997685+00:00"
createdAt: "2024-12-09T21:17:12.283926+00:00"
---
AI models are increasingly deployed in high-stakes environments, where failures can lead to privacy breaches, misinformation, and other societal harms. Bypassing an AI model’s safeguards to elicit harmful outputs remains one of the most direct methods for identifying vulnerabilities. Yet, despite its importance, designing rigorous, reproducible studies to evaluate jailbreaking strategies is underexplored.

At Pareto, our work in AI safety and red-teaming has provided us with unique insights into the dynamics of model jailbreaking. Drawing on empirical data and proprietary evaluation frameworks, we outline key considerations for developing high-impact studies, identify challenges unique to this domain, and propose a structured methodology to improve the safety and reliability of AI systems.

## Types of safety evaluations

As you may know, AI safety evaluations encompass a broad spectrum of methodologies:

Testing under adversarial conditions

Establishing baselines for model performance under adversarial conditions and comparing results across models.

Dataset creation

Developing datasets that simulate realistic adversarial prompts for large-scale evaluation.

Brute-force testing


Exhaustively probing models for vulnerabilities through systematic, high-volume attacks.

Specialized risk assessment 

Investigating specific vulnerabilities, such as bias, misinformation, or misuse in high-stakes applications.

Each type of evaluation serves distinct goals and requires tailored methodologies, making it essential to define clear objectives before designing a study. For instance, dataset creation requires a broader participant pool, while specialized risk assessment may require domain experts.

## Jailbreaking in the safety landscape

Jailbreaking studies highlight critical weaknesses that arise at the intersection of model architecture, training data, and operational deployment. Insights from these studies reveal:

Participant skill level matters

Skilled practitioners often bypass safeguards faster and more effectively than novices.

Jailbreaking methods vary

Different techniques, from reverse-prompt engineering to exploiting multimodal inputs, yield varied success rates depending on the model and task.

Model characteristics influence outcomes

The design and training paradigms of AI systems (e.g., GPT vs. Claude) significantly impact their susceptibility to certain attacks.

For example, GPT models may be more vulnerable to attacks involving contextual document inputs, while Claude exhibits higher resistance to such methods but struggles with reverse-prompt attacks. Understanding these nuances is key to designing better defenses.

## Challenges

Despite their importance, jailbreaking studies face several challenges:

Significant variance


Success rates vary widely depending on participant expertise, input modality, and the specific jailbreak method employed. Skilled participants may achieve results in under 60 seconds, while laypeople might take upwards of 30-40 minutes—or fail entirely. 

Ethical and legal considerations

Jailbreaking often involves navigating ethical gray areas, particularly in regions with diverse cultural and legal standards.

Reproducibility Issues

Differences in study design, participant demographics, and task constraints can make it difficult to reproduce findings across different teams and settings.

## Our methodology for comprehensive evaluation

Drawing from our collaborative efforts with domain experts and safety researchers, as well as our own findings, we have developed a comprehensive methodological framework for designing evaluations in AI jailbreaking studies:

Participant selection

Stratify participants by expertise: novice, intermediate, and expert.

Incorporate domain experts for specialized misuse cases (e.g., cybersecurity, legal compliance).

Ensure demographic diversity to capture a range of perspectives.

Task design

Develop scenarios that reflect real-world misuse risks, such as generating misinformation or circumventing ethical safeguards.

Include time constraints to simulate realistic conditions.

Align tasks with clear ethical boundaries and legal compliance.

Data collection and analysis

Use standardized metrics, such as time-to-jailbreak, severity of jailbreak, success rate, and user expertise level for quantifiable results.

Conduct qualitative analysis of strategies to identify patterns and innovative techniques.

Implement robust anonymization protocols to ensure participant privacy.

Cross-validation

Run multi-site studies to account for regional differences in language, culture, and ethical norms.

Use inter-rater reliability assessments to enhance the consistency of qualitative data.

Input modality testing

Incorporate text-only, multimodal, and RAG-based inputs to evaluate vulnerabilities across a comprehensive range of use cases.

## Conclusion

Jailbreaking studies are an important part of AI safety evaluations, revealing vulnerabilities that might otherwise go unnoticed until exploitation occurs in real-world settings. 

At Pareto, we provide tailored evaluation frameworks and methodologies. Future research should explore adaptive jailbreaking protocols, transfer learning for vulnerability assessment, and the role of explainable AI in identifying and mitigating risks.