---
title: "Apple's AI Ambitions: DCLM-7B, Data Curation, and Consumer Tech"
layout: post
date: 2024-10-10
image: "https://i.imgur.com/H6zVv35.png"
description: "Apple's open-source DCLM-7B model matched the performance of LLAMA3-8B with approximately 1/6th of the compute. Learn the role of data curation and strong pre-training datasets in designing effective open-source models."
category: Large Language Models
author: Ayush Parti
id: QmxvZ1Bvc3ROb2RlOmVlMjNhMDVmLWI1MDItNDdlYi04MWI5LWIzZTczYmFlOWE3ZA==
slug: apple-dclm-7b
ctaText: Hire annotators
mainImage: "https://i.imgur.com/H6zVv35.png"
categoryId: QmxvZ0NhdGVnb3J5Tm9kZTpmNWQ2NTdhNy1lODZkLTQyNzYtYmI0OC1mMzRiMzY4NjI0ZmM=
authorId: VXNlck5vZGU6ZGFjY2ViOTgtY2U1Ny00NDJhLTg0NDgtOGZlZGQzZjk1NmU5
authorFirstName: Ayush
authorLastName: Parti
relatedArticles:
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjAyNDM1MmFlLTczMzMtNGIzNC05YmUyLWI3NjViMjlkNWJkMw==
    title: "Leveraging OpenAI o1's \"Deep Thinking\" Capabilities Effectively"
    slug: openai-o1-cot
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjFjN2ExMDA0LWY0MjMtNDg5Zi1iMjRlLTI4NGVhY2VjODNkYw==
    title: "Behind the Data: Morissa Schwartz"
    slug: ai-trainer-stories-july
    categoryName: Ethics in AI
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmM5YjIyZTFjLWM1YzAtNDQ4OC04YWQxLTQ4NDRkMWRhYWIxNQ==
    title: Beginners Guide to One-shot Learning
    slug: one-shot-learning
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjY5MDRmYzkyLTAyZDEtNGRmMi04NzlkLTk1MDg2ZmYwYjc4Ng==
    title: "The Future of Crowd Work: Q&A with Dr. Mark Whiting"
    slug: future-of-crowd-work-qa
    categoryName: Data Labeling
seoTitleTag: "Apple's AI Ambitions: DCLM-7B, Data Curation, and Consumer Tech"
seoMetaDescription: "Apple's open-source DCLM-7B model matched the performance of LLAMA3-8B with approximately 1/6th of the compute. Learn the role of data curation and strong pre-training datasets in designing effective open-source models."
publishedOn: "2024-10-10T16:46:36.234590+00:00"
updatedAt: "2024-10-10T17:22:03.129863+00:00"
createdAt: "2024-10-10T16:36:48.113828+00:00"
---
Apple has long been known for its focus on privacy and hardware innovations, but its growing involvement in the AI space is becoming harder to ignore.

While the company's AI efforts have traditionally been more subtle, they are now pushing into the forefront with developments like DCLM-7B this past summer, along with its upcoming launch of Apple Intelligence. These moves hint at Apple’s growing ambitions in the AI industry.

DCLM-7B marked a significant milestone in Apple’s AI research track record, as it rivaled LLAMA3-8B’s performance with ~1/6th of the compute, and even beat Mistral-7B. The model design, data curation, and open-source approach point to Apple taking a more active role in the AI research community. But what exactly was the intention behind releasing this model and what plans does Apple have in building frontier language models? Let’s dive into it.

##  Apple’s DCLM-7B: What’s it for?

Most dataset curation methods rely heavily on heuristic filtering, deduplication, and extensive web crawls, resulting in a lack of standardized benchmarks. This inconsistency complicates the evaluation of language models, making it challenging to identify effective curation strategies and impeding progress in the field.

To tackle these challenges, researchers from Apple, the University of Washington, and other institutions developed the DataComp for Language Models (DCLM) framework, recently open-sourced on the Hugging Face Platform. This release includes models and datasets such as DCLM-7B, DCLM-1B, and DCLM-7B-8k, providing a testbed for controlled experiments with large datasets. The DCLM framework offers a comprehensive corpus of 240 trillion tokens from Common Crawl, effective pretraining recipes based on OpenLM, and a diverse suite of 53 downstream evaluations, establishing a standardized approach to dataset curation.

Structured workflows for research

DCLM enables researchers to choose model sizes from 412M to 7B parameters and explore data curation strategies. Models trained with standardized recipes can be evaluated across downstream tasks to identify effective methods.


Higher accuracy due to careful data curation

One of the standout features of DCLM-7B is its data curation pipeline, which emphasizes the value of high-quality datasets in training large-scale models. DCLM has enhanced language model training, with a 7B parameter model achieving 64% 5-shot accuracy on the MMLU benchmark using 2.6 trillion tokens. This improves upon MAP-Neo by 6.6 percentage points while using 40% less computing power.

Enhanced performance through advanced text extraction



Another benefit of DCLM-7B is its use of advanced text extraction methods, such as resiliparse and trafilatura, which significantly improve downstream performance over traditional sources like Common Crawl. Coupled with the fastText OH-2.5 + ELI5 classifier for quality filtering, DCLM-7B achieves higher accuracy, ensuring effective language model training.

Ethics and AI alignment

Apple has always had a strong focus on privacy and ethical AI. By releasing DCLM-7B under an open license with extensive documentation on its data and curation processes, Apple is positioning itself as a player in the responsible AI space. The open-source nature also allows for transparency, enabling external researchers to audit the model’s datasets and performance.

## Key highlights of DCLM-7B

1. Apple’s DCLM-7B base model is trained on a massive 2.5 trillion tokens, mostly from English data sources, originally utilizing a 2048-token context window (and now an 8k version) for better long-range dependencies.

2. The data used to train DCLM-7B is curated from several high-quality datasets, including DCLM-BASELINE, StarCoder, and ProofPile2, ensuring a wide coverage of language patterns and domain-specific knowledge.

3. DCLM-7B achieves an impressive MMLU score of 0.6372, placing it ahead of Mistral but just below Llama3 in terms of raw performance.

4. The model is open-sourced under the Apple Sample Code License, emphasizing Apple’s intention to contribute to the AI research community while maintaining certain control over commercial usage.

5. The DCLM-7B matches the performance of several closed-dataset models like Mistral, signaling that Apple’s curated datasets and training approaches are at par with, or even better than, industry alternatives.

6. Built using PyTorch and OpenLM, the model leverages popular open-source frameworks, making it easier for researchers to adopt and adapt for various use cases.
7. The model is available on Hugging Face, and integrates seamlessly with the Transformers library, making it accessible to a broad range of AI researchers and developers.

##  What was the “thoughtful” data curation for DCLM-7B?

The curation of data for DCLM 7B involved several key steps aimed at ensuring high-quality input for training:

Data source selection

A diverse range of data sources was identified and chosen to ensure comprehensive coverage of topics, styles, and formats. This diversity helps the model generalize better across various applications.

Data filtering

The selected datasets underwent rigorous filtering to remove low-quality, irrelevant, or noisy data. This step may include eliminating duplicates, correcting errors, and excluding any content that doesn't meet specific criteria for quality or relevance.

Annotation and labeling

Where necessary, data may have been annotated or labeled to provide context or specific training signals. This step is crucial for supervised learning, as it guides the model in understanding the nuances of the data.

Bias mitigation

Efforts were likely made to identify and address potential biases in the data. This could involve balancing the representation of different demographics, viewpoints, or topics to reduce the risk of the model perpetuating harmful stereotypes or misinformation.

Continuous evaluation

The curation process includes continuous evaluation and feedback loops to assess the quality of the training data. This might involve testing the model on validation datasets to ensure it learns effectively from the curated data and adjusting the curation strategy as needed.

Documentation

Clear documentation of the curation process, including methodologies and rationale for choices made, is essential for transparency and reproducibility. This enables researchers to understand the origins and quality of the dataset, facilitating further research and improvements.

By employing these strategies, Apple ensured that the data used for training DCLM 7B was not only vast in quantity but also rich in quality, thereby contributing significantly to the model's superior performance.

## Why not use DCLM-7B for Apple Intelligence?

Despite the launch of their powerful DCLM-7B model, Apple chose to partner with OpenAI for Apple Intelligence. This decision stems from several strategic factors.

First, OpenAI is an industry leader, particularly with models like GPT, which has a wide recognition and trust among consumers. By integrating OpenAI’s ChatGPT into its ecosystem, Apple benefits from proven AI capabilities that are already familiar to users. This provides Apple with a competitive AI offering without needing to immediately rely on their in-house models.

Moreover, ChatGPT adds broader knowledge and functionality, such as enhanced query answering and general information access, that DCLM-7B, designed for specific use cases, might not cover as comprehensively. Additionally, partnering with OpenAI allows Apple to maintain its focus on user privacy while leveraging advanced AI capabilities in a way that aligns with consumer trust and expectations.

While Apple has made strides with DCLM-7B, the partnership with OpenAI ensures Apple stays competitive in the broader AI landscape while DCLM-7B continues to excel in its specialized areas.

##  Apple’s larger AI strategy

We want to start with a disclaimer that this section is merely informed speculation based on publicly available data.

Now, while DCLM-7B is an important milestone, it’s likely just the beginning for Apple’s foray into AI. Apple's extensive resources, coupled with its massive hardware user base, put the company in a unique position to innovate in both AI software and hardware integration. 

** 1. AI at the edge**

Apple has been a leader in developing efficient on-device processing through its Apple Neural Engine (ANE), which powers many existing AI features on iPhones and Macs. Integrating models like DCLM-7B could lead to more sophisticated on-device machine learning, enhancing user privacy by processing data locally rather than sending it to the cloud.

** 2. Privacy and data security**

Apple's AI efforts have always been guided by a privacy-first approach, making it likely that any future AI applications—whether in voice assistants, healthcare, or facial recognition—will heavily emphasize secure and private on-device computations. The open-source release of DCLM-7B, paired with data curation transparency, indicates Apple's intention to balance AI innovation with user trust.

** 3. AI tools for developers**

By releasing DCLM-7B through accessible platforms like Hugging Face, Apple might be hinting at plans to create developer tools that can be integrated into a wide range of applications, from NLP tasks to AI-driven apps across the Apple ecosystem. This aligns with Apple’s broader strategy of empowering developers to leverage advanced technologies like ARKit and CoreML.

## Conclusion

Apple’s release of DCLM-7B shows that the company is stepping up its game in AI, focusing on open-source contributions, advanced language modeling, and thoughtful data curation.

While Apple's use of automated data pipelines is a step in the right direction, truly unlocking the next level of model performance requires the integration of small-batch, high-precision expert data. We’re excited to see companies recognizing the importance of tailored data solutions as the future of AI development unfolds, and our team of scientists and HCI experts is ready to support them every step of the way.