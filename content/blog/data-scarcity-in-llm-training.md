---
title: Is Data Scarcity the Biggest Obstacle to AI’s Future?
layout: post
date: 2024-10-16
image: "https://i.imgur.com/XZeDRkJ.png"
description: We delve into the implications of data scarcity on model training, emphasizing the need for high-quality, expert-sourced human data as a cornerstone of AI development.
category: Large Language Models
author: Ayush Parti
id: QmxvZ1Bvc3ROb2RlOjRjNDQyMzI2LTdiY2UtNGVkNC1hZmNhLTNhZjM4NDk4MDUzMw==
slug: data-scarcity-in-llm-training
ctaText: Hire experts
mainImage: "https://i.imgur.com/XZeDRkJ.png"
categoryId: QmxvZ0NhdGVnb3J5Tm9kZTpmNWQ2NTdhNy1lODZkLTQyNzYtYmI0OC1mMzRiMzY4NjI0ZmM=
authorId: VXNlck5vZGU6ZGFjY2ViOTgtY2U1Ny00NDJhLTg0NDgtOGZlZGQzZjk1NmU5
authorFirstName: Ayush
authorLastName: Parti
relatedArticles:
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmY1ZDllZGZjLTkxOGItNDg4Yi1iMTQ0LTYwZmRhN2ViNDljOA==
    title: "The false dichotomy of \"synthetic data vs. human data\""
    slug: synthetic-vs-human-data
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjAyNDM1MmFlLTczMzMtNGIzNC05YmUyLWI3NjViMjlkNWJkMw==
    title: "Leveraging OpenAI o1's \"Deep Thinking\" Capabilities Effectively"
    slug: openai-o1-cot
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjg1YmQzYmVjLTI0NTYtNDBkOC04NzM4LWQ4OWQ1NmI3YTFjZA==
    title: What is AI Bias?
    slug: what-is-ai-bias
    categoryName: Data Labeling
seoTitleTag: Is Data Scarcity the Biggest Obstacle to AI’s Future?
seoMetaDescription: We delve into the implications of data scarcity on model training, emphasizing the need for high-quality, expert-sourced human data as a cornerstone of AI development.
publishedOn: "2024-10-16T17:35:18.094523+00:00"
updatedAt: "2024-10-16T17:39:18.945965+00:00"
createdAt: "2024-10-16T17:35:18.094997+00:00"
---
The rapid scaling of AI models in recent years has been fueled by unprecedented increases in computational power and the availability of vast amounts of data. With training compute expanding at an impressive rate of approximately fourfold annually, we've witnessed remarkable advancements in model performance. Yet, sustaining this momentum through 2030 presents significant challenges, chief among them being **data scarcity.**

While the integration of multimodal data—encompassing images, audio, and video—offers potential for expansion, it will fall short of fulfilling the demands of larger, more intricate models. The limitations inherent in existing datasets prompt urgent questions regarding their quality, relevance, and applicability, underscoring the necessity for alternative data sources.

This article explores the critical factors impacting AI scaling, including power availability, chip manufacturing capacity, and the “latency wall”—a fundamental speed limit arising from unavoidable delays in AI training computations. We will delve into the implications of data scarcity on model training, emphasizing the need for high-quality, expert-sourced human data as a cornerstone of AI development. Finally, we will examine how synthetic data generation can serve as a pivotal strategy to address these challenges, ensuring that AI continues to progress effectively and responsibly over the next decade.

##  Data scarcity: a fundamental constraint on AI growth

By 2030, we could witness training runs [reaching up to 2×10^29 FLOP,](https://arxiv.org/html/2211.04325v2) with models exceeding the complexity of GPT-4. However, achieving this level of sophistication will necessitate innovative strategies to surmount current data constraints. While multimodal data could contribute trillions of tokens to the training pool, it alone will not suffice to catalyze the next wave of AI advancements.

AI systems depend on expansive datasets, with the largest training datasets encompassing up to 15 trillion tokens. Although this scale has propelled models like GPT-4, the reality is that the availability of unique, high-quality data online is finite. The indexed web's estimated total of 500 trillion tokens, which may reach 750 trillion by 2030, will not adequately meet AI’s evolving needs.

The [Chinchilla scaling laws](https://medium.com/@raniahossam/chinchilla-scaling-laws-for-large-language-models-llms-40c434e4e1c1) stipulate that AI models must grow in size in tandem with the data they consume. Absent new training data sources, AI models may encounter a performance plateau. This underscores the critical role of multimodal data and expert-sourced datasets in future AI development.

##  Power, chip manufacturing, and latency constraints

Beyond data scarcity, three additional constraints could impede the scaling of AI models through 2030: power availability, chip manufacturing capacity, and the latency wall.

Power availability

Training large-scale AI models demands substantial electricity. As model complexity increases, so will the power required. Data center consumption, currently at 20 GW, may surge to 90 GW by 2030, potentially constrained by existing grid infrastructure, which may struggle to expand at the necessary pace.

Chip manufacturing capacity

The production of essential AI chips, such as Nvidia’s H100 GPUs, is critical for training AI models. However, challenges in advanced packaging and high-bandwidth memory production may hinder the ability to produce sufficient chips to meet demand. Despite efforts by semiconductor manufacturers to scale production, uncertainties in supply chain logistics and capital expenditure could limit chip availability, constraining the compute resources vital for AI scaling.

The latency wall

As models grow in size and complexity, they encounter the "latency wall." This represents a fundamental limit due to the sequential nature of AI computations, wherein operations within a neural network must occur in sequence. This results in unavoidable delays in model training. Although increasing batch sizes and enhancing hardware efficiency can alleviate some latency, there exists a threshold beyond which further scaling becomes inefficient.

As mentioned earlier, data emerges as the most uncertain bottleneck—its variability spans four orders of magnitude. The effectiveness of multimodal data in enhancing reasoning capabilities may be constrained, and our assessments regarding the volume, quality, and efficiency of existing tokenization methods for this data are less reliable compared to those for text-based data. While synthetic data holds the potential to support indefinite scaling, it comes at a considerable computational expense.

##  The role of expert knowledge in scaling AI

While large-scale, general-purpose datasets have been instrumental thus far, they represent only one facet of the solution. At Pareto AI, we assert that the integration of small-batch expert knowledge—carefully curated, high-quality data sourced from domain experts—is vital for the next evolution of AI.

In specialized fields such as medicine, finance, and law, expert-annotated data offers AI models nuanced, specific knowledge unattainable from generic web-scraped sources. By incorporating human feedback from trusted experts, we can cultivate high-impact data that enhances AI performance in targeted ways. This approach not only addresses the scarcity of publicly available data but also ensures that AI systems are trained on the most relevant, accurate, and ethically sourced information.

##  Addressing data scarcity with expert-led human data and synthetic augmentation

As AI models continue to expand, the demand for high-quality data emerges as a critical bottleneck. The indexed web, holding approximately 500 trillion unique tokens, is projected to grow by a mere 50% by 2030—insufficient to support AI's exponential capabilities. While multimodal learning may add some value through the integration of image, video, and audio data, the anticipated growth will likely reach its limits. Estimates suggest that by 2030, available training tokens could range from 400 trillion to 20 quadrillion. Nevertheless, data scarcity remains a pressing issue.

To tackle this challenge, we advocate a two-pronged approach that merges expert-led human data collection with synthetic data augmentation. Meticulously sourced human data constitutes the gold standard—the foundation for any credible AI training pipeline. In the development of new model capabilities, expert-verified human data provides the necessary ground truth and serves as a launching pad for synthetic data generation. This ensures that synthetic datasets are built on accurate, high-quality inputs, significantly enhancing the model’s performance and scalability.

## Conclusion

As AI models continue to scale, the challenges of data scarcity, power availability, chip manufacturing capacity, and the latency wall will increasingly shape the future of AI development. While larger datasets and more computational power are critical, they alone will not be enough to sustain the rapid advancements seen over the past decade.

Addressing these constraints requires innovative solutions. By using expert-sourced human data as the foundation for AI training, we can ensure the accuracy and reliability of synthetic data pipelines, helping to overcome the limitations of existing datasets. This approach, combined with improvements in infrastructure and hardware, will be essential for driving AI’s progress through 2030 and beyond. With the right strategies, the next generation of AI systems can continue to improve in performance and deliver on their potential to transform industries and society.