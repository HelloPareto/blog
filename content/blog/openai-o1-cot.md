---
title: "Leveraging OpenAI o1's \"Deep Thinking\" Capabilities Effectively"
layout: post
date: 2024-10-07
image: "https://i.imgur.com/mqbFJ4z.png"
description: "With the introduction of OpenAI o1's reasoning capability, prompting methods need to be adjusted. OpenAI o1 handles complex reasoning internally, which means old prompting strategies may no longer be effective."
category: Large Language Models
author: Ayush Parti
id: QmxvZ1Bvc3ROb2RlOjAyNDM1MmFlLTczMzMtNGIzNC05YmUyLWI3NjViMjlkNWJkMw==
slug: openai-o1-cot
ctaText: Hire labelers
mainImage: "https://i.imgur.com/mqbFJ4z.png"
categoryId: QmxvZ0NhdGVnb3J5Tm9kZTpmNWQ2NTdhNy1lODZkLTQyNzYtYmI0OC1mMzRiMzY4NjI0ZmM=
authorId: VXNlck5vZGU6ZGFjY2ViOTgtY2U1Ny00NDJhLTg0NDgtOGZlZGQzZjk1NmU5
authorFirstName: Ayush
authorLastName: Parti
relatedArticles:
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmQ0YTk4YTViLThjNjUtNGIxYy05ODFjLTVhOGY2YzFkNDRlMw==
    title: Designing Robust Human Studies for AI Safety Evaluations
    slug: human-studies-for-ai-safety-evals
    categoryName: Ethics in AI
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjliZDRkOTE0LTE1NWUtNGMwNS1hNDVhLTEyMmMwOThmMjY3NQ==
    title: "Data Annotation's Role in Shaping Ethical AI Governance Post-AGI"
    slug: data-annotation-ethical-governance-post-agi
    categoryName: Ethics in AI
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjA0ZTI4NDRlLTE1NjEtNGIzNy1hZDRhLTM4ODUyMTg2YmI4YQ==
    title: "Data Annotation's Growing Appeal to PhDs and Scientists"
    slug: data-annotation-for-phds
    categoryName: Data Labeling
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmVlOTllMzQyLWNhYWUtNDJkZS1iODNjLTU4NzY1ZTk0ZDI3Yw==
    title: 26 Prompting Principles for Optimal LLM Output
    slug: 26-prompting-principles-for-llms
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjRjNDQyMzI2LTdiY2UtNGVkNC1hZmNhLTNhZjM4NDk4MDUzMw==
    title: Is Data Scarcity the Biggest Obstacle to AI’s Future?
    slug: data-scarcity-in-llm-training
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmVlMjNhMDVmLWI1MDItNDdlYi04MWI5LWIzZTczYmFlOWE3ZA==
    title: "Apple's AI Ambitions: DCLM-7B, Data Curation, and Consumer Tech"
    slug: apple-dclm-7b
    categoryName: Large Language Models
seoTitleTag: "OpenAI o1: Leveraging CoT Reasoning Effectively"
seoMetaDescription: "With the introduction of OpenAI o1's reasoning capability, prompting methods need to be adjusted. OpenAI o1 handles complex reasoning internally, which means old prompting strategies may no longer be effective."
publishedOn: "2024-10-07T16:10:17.547262+00:00"
updatedAt: "2024-10-07T21:23:58.048085+00:00"
createdAt: "2024-10-07T16:09:56.819637+00:00"
---
OpenAI’s o1 and o1 "mini" models have drawn significant interest from a diverse audience, including AI researchers, data scientists, and software developers. Tech professionals are particularly drawn to to a key improvement over previous GPT models: OpenAI's new models are trained to prioritize step-by-step reasoning. Unlike earlier iterations, these models now approach questions systematically, thinking through each part before generating a response.

This internal "thinking" process adds latency, but yields notable accuracy improvements, especially in complex problem solving tasks. In math reasoning tasks, OpenAI o1 achieves an [82% accuracy improvement](https://openai.com/index/learning-to-reason-with-llms/) compared to earlier models. This stepwise reasoning structure enhances not just math, but a wide range of logic based tasks, showing the potential to redefine model applications. However, these gains come with tradeoffs in response time and a new approach to prompting.

With the introduction of this reasoning capability, prompting methods need to be adjusted. OpenAI o1 handles complex reasoning internally, which means old prompting strategies may no longer be effective. Understanding these shifts is key to leveraging the model’s strengths optimally.

## A quick refresher on Chain-of-Thought (CoT) reasoning in LLMs

Traditional large language models (LLMs) like GPT4o generate responses by predicting the next word based on statistical probabilities within the sentence's context. However, they often struggle with complex reasoning tasks that require multistep processing, such as solving mathematical equations or logical puzzles. As the complexity of a task increases, models can easily lose track of their reasoning path.

Chain of Thought (CoT) effectively addresses this limitation by breaking down complicated problems into manageable steps. This structured approach allows the model to focus on one aspect of the problem at a time, leading to improved accuracy in its responses.

For instance, instead of simply prompting the model to "Solve 3x + 5 = 20," you can explicitly guide it through the necessary steps to reach the correct solution:

System message: "You are a skilled mathematician. Help me solve this equation step by step."

For example, let us take the equation 3x + 5 = 20.

Subtract 5 from both sides:

(3x + 5 - 5 = 20 - 5)

(3x = 15)

Divide both sides by 3: 

(3x / 3 = 15 / 3)  

(x = 5)

User message: "Now, solve 4x - 7 = 9."

Previously, users often had to structure prompts to include these intermediate steps. With the integration of CoT reasoning in OpenAI o1, the model can now handle such tasks natively, significantly reducing the need for extensive prompting. This enhancement means that models can engage in complex reasoning with greater confidence and clarity, making them more efficient and effective at solving multistep problems. 

## How to effectively prompt OpenAI o1 and o1-mini

Given its internal reasoning capabilities, optimal prompts for OpenAI o1 differ from previous models. Here’s what you need to know:

Keep prompts simple

The model is designed to handle reasoning on its own. Complex instructions can hinder performance. Use clear, straightforward prompts.

Avoid CoT in prompts

Since CoT is integrated into the model's structure, explicit reasoning in the prompt can be redundant and counterproductive.

Use delimiters for structure 

Consistently use delimiters like "###" or XML tags to clearly indicate different sections or steps in a prompt. This helps the model maintain focus.

Limit Additional Retrieval-Augmented Generation (RAG)

While adding context through RAG can be helpful, too much irrelevant information at inference time may overwhelm the model. Be selective with the context provided.

This is because OpenAI hides the actual internal reasoning process, making it difficult to fully understand how the model solves complex problems. This opacity complicates determining what context is most relevant. 

Speaking of which…

## Known limitations of o1 models

Despite their strengths, the OpenAI o1 models come with certain limitations:

Hidden Chain-of-Thought process

As mentioned earlier, the model’s internal reasoning is inaccessible, making it hard to predict response times or analyze the decision making process.

Limited features 

Features like tool integration are not available in these models, which may constrain certain use cases. O1 models lack support for system messages, requiring significant middleware changes.

Response time

These models take longer to generate responses, so latency-sensitive applications may not be ideal candidates for OpenAI o1. It’s crucial to evaluate use cases to ensure the model is a good fit. For faster tasks, GPT4o might still be more appropriate.

Overkill for current use cases

o1's advanced capabilities are unnecessary for simpler tasks, leading to inefficient resource use. o1 models are also more expensive and exhibit slower response times than existing models.

Limited use in some domains

Human evaluators found OpenAI o1 less effective in creative writing tasks compared to other models. While it excels in logical reasoning, it's [not the best option](https://community.openai.com/t/o1-is-useless-for-us-and-our-use-cases/939838) for every type of task.

## Measurable improvements in the capabilities of OpenAI o1

[Our research](https://arxiv.org/abs/2409.18486) finds that the o1 models excel at tasks that require structured thinking, surpassing earlier models in several domains. They outperform in PhD-level science benchmarks, competitive programming, and advanced math problem solving.

In a challenging math exam, OpenAI o1 scored 83%, a significant jump from GPT4o’s 13%. OpenAI o1 demonstrated superior performance in solving difficult SAT math problems, quantitative investing, social media analysis, and a range of other domains; therefore, it is essential to utilize o1's CoT reasoning capabilities effectively to fully leverage this power.

## 

OpenAI o1's potential for revolutionizing agentic, multistep applications



We view OpenAI o1 models as foundational technology, similar to how GPT2 models paved the way for subsequent advancements. While still in early stages, these models represent the future of AI that can handle more complex, agentic tasks. The emphasis is shifting from immediate response generation to more thoughtful, goal-driven outcomes.

In the near future, reasoning models like OpenAI o1 could be used for higher-level planning tasks, while faster models handle execution. The ability to balance these strengths could transform the next generation of AI systems.

For researchers evaluating the o1 models, or those seeking guidance on adapting prompting strategies, we invite you to connect with our AI experts. Our team is ready to provide insights and feedback on how best to integrate these models into your workflows.