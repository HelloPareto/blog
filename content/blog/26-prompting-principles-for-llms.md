---
title: 26 Prompting Principles for Optimal LLM Output
layout: post
date: 2024-10-22
image: "https://i.imgur.com/8qMZP5N.png"
description: Discover 26 essential prompting principles to enhance your interactions with large language models (LLMs). Learn how to craft precise prompts for clearer, more accurate AI-generated responses.
category: Large Language Models
author: Ayush Parti
id: QmxvZ1Bvc3ROb2RlOmVlOTllMzQyLWNhYWUtNDJkZS1iODNjLTU4NzY1ZTk0ZDI3Yw==
slug: 26-prompting-principles-for-llms
ctaText: Hire annotators
mainImage: "https://i.imgur.com/8qMZP5N.png"
categoryId: QmxvZ0NhdGVnb3J5Tm9kZTpmNWQ2NTdhNy1lODZkLTQyNzYtYmI0OC1mMzRiMzY4NjI0ZmM=
authorId: VXNlck5vZGU6ZGFjY2ViOTgtY2U1Ny00NDJhLTg0NDgtOGZlZGQzZjk1NmU5
authorFirstName: Ayush
authorLastName: Parti
relatedArticles:
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOmQ5NmRmNDQ4LTgxYmEtNGNjZC1iMWNhLThhOWNmNjg5NDBjNw==
    title: The micro-decisions made by AI trainers that define data quality
    slug: ai-training-microdecisions
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjA0ZTI4NDRlLTE1NjEtNGIzNy1hZDRhLTM4ODUyMTg2YmI4YQ==
    title: "Data Annotation's Growing Appeal to PhDs and Scientists"
    slug: data-annotation-for-phds
    categoryName: Data Labeling
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjAyNDM1MmFlLTczMzMtNGIzNC05YmUyLWI3NjViMjlkNWJkMw==
    title: "Leveraging OpenAI o1's \"Deep Thinking\" Capabilities Effectively"
    slug: openai-o1-cot
    categoryName: Large Language Models
  - id: UHVibGljQmxvZ1Bvc3ROb2RlOjFjN2ExMDA0LWY0MjMtNDg5Zi1iMjRlLTI4NGVhY2VjODNkYw==
    title: "Behind the Data: Morissa Schwartz"
    slug: ai-trainer-stories-july
    categoryName: Ethics in AI
seoTitleTag: 26 Prompting Principles for Optimal LLM Output
seoMetaDescription: Discover 26 essential prompting principles to enhance your interactions with large language models (LLMs). Learn how to craft precise prompts for clearer, more accurate AI-generated responses.
publishedOn: "2024-10-22T14:28:51.250940+00:00"
updatedAt: "2024-10-22T14:33:41.108010+00:00"
createdAt: "2024-10-22T14:28:42.679681+00:00"
---
LLMs exhibit incredible capabilities in natural language understanding and generation, allowing them to perform tasks ranging from text completion and translation to complex reasoning and summarization. However, the effectiveness of their outputs heavily relies on how users frame their prompts. The way a question or task is articulated can significantly influence the model's interpretation and, consequently, the quality of the response generated. Factors such as specificity, clarity, and context play a crucial role in guiding the model's focus and ensuring that it aligns with the user’s intent. 

This guide presents 26 prompting principles, grounded in the findings of the research paper ["Prompting Principles for Effective Human-LLM Communication."](https://arxiv.org/abs/2312.16171v1) These principles are designed to enhance the precision and relevance of LLM responses by offering structured approaches to prompt formulation. 

## 1. Get straight to the point

Politeness is often appreciated in human communication, but with LLMs, it’s more efficient to be direct. Avoid adding phrases like “please,” “thank you,” or “if you don’t mind.” Instead, get straight to the point.

Instead of saying, “Could you please provide a summary of climate change?” you could say, “Provide a summary of climate change.”

## 2. Define the audience

When crafting your prompt, specify the intended audience to ensure that the response is tailored appropriately.

“Explain the concept of machine learning to an expert in data science.”

“Explain the concept of machine learning to a high school student.”

## 3. Break down complex tasks

If you are tackling a complicated topic or task, consider breaking it down into a series of simpler prompts.

“First, explain what artificial intelligence is. Then, describe the differences between AI, machine learning, and deep learning.”

## 4. Use affirmative directives

Utilize clear, affirmative commands such as “do” to instruct the model on what you want it to accomplish.

Instead of “don’t forget to include solar energy,” just say, “Include solar energy in your overview.”

## 5. Request clarity

When you seek to understand a topic better, frame your request in terms that guide the model toward simplicity.

“Explain quantum computing in simple terms.”

“Explain the theory of relativity to me like I’m 11 years old.”

## 6. Offer incentives

Consider adding an engaging element to your prompts by suggesting an incentive.

“I’m going to tip $50 for the best solution to this math problem!”

## 7. Use example-driven prompting

Employ few-shot prompting by providing relevant examples within your request.

“Write a poem about the ocean. For example, here’s a line to inspire you: ‘The waves dance and twirl in the golden sun.’”

## 8. Format your prompt

Effective formatting enhances readability and clarity.

###Instruction###  
Provide an overview of the main features of Python.  

###Example### 

Python is known for its simplicity and readability...

###Example######Question###  

###Example###What are some common applications of Python?

## 9. Clarify tasks

To emphasize the importance of your request, incorporate phrases like “Your task is” and “You MUST.”

“Your task is to analyze the economic impact of COVID-19. You MUST include data from the last three years.”

## 10. Introduce consequences

Use phrases like “You will be penalized” to communicate the importance of adhering to the instructions.

“If you do not follow the specified format, you will be penalized with a lower score on your assignment.”

## 11. Emphasize human-like responses

Incorporate the instruction “Answer a question given in a natural, human-like manner” within your prompts.

“What are the benefits of meditation? Answer in a natural, human-like manner.”

## 12. Encourage step-by-step thinking

Promote logical reasoning by encouraging the model to “think step by step.”

“Explain how to bake a cake, thinking step by step from gathering ingredients to serving.”

## 13. Promote unbiased responses

To ensure the model produces fair and balanced outputs, add the phrase “Ensure that your answer is unbiased and does not rely on stereotypes.”

“Describe the role of women in technology. Ensure that your answer is unbiased and does not rely on stereotypes.”

## 14. Facilitate dialogue

Encourage the model to engage with you actively by prompting it to ask questions until it has enough information to provide a comprehensive response.

“From now on, I would like you to ask me questions to gather details before providing an answer about my project.”

## 15. Teach with tests

If you want to deepen your understanding of a concept, frame your prompt as a teaching exercise.

“Teach me the Pythagorean theorem and include a test at the end, but don’t give me the answers.”

## 16. Assign roles

To enhance the context of the conversation, assign a specific role to the LLM.

“You are now an expert financial advisor. What investment strategies would you recommend for a beginner?”

## 17. Use delimiters

Delimiters can effectively clarify the various sections of your prompt.

“###Task### Write a summary of the novel. ###Details### Focus on the main character and their motivations.”

## 18. Repeat key terms

Incorporating repetition of specific words or phrases within your prompt can help underscore their significance.

“Discuss the importance of sustainability in sustainability practices.”

## 19. Combine techniques

For more sophisticated prompts, combine Chain-of-Thought (CoT) reasoning with few-shot prompting.

“Think step by step about how to create a business plan. Here’s an example of what to include: executive summary, market analysis, etc.”

## 20. Utilize output primers

To guide the model toward your expected response, consider ending your prompt with the beginning of the anticipated output.

“Explain the importance of biodiversity. Biodiversity is important because…”

## 21. Request detailed outputs

When seeking in-depth content, instruct the model clearly by stating, “Write a detailed [text] on [topic], including all necessary information.”

“Write a detailed essay on climate change, including its causes, effects, and potential solutions.”

## 22. Revise without changing style

To improve existing text while maintaining its original tone and style, direct the model with a prompt such as, “Revise every paragraph by only enhancing grammar and vocabulary.”

“Revise the following paragraph to improve its clarity without changing its style: ‘The quick brown fox jumps over the lazy dog.’”

## 23. Manage complex code prompts

For coding tasks that may span multiple files, provide clear instructions.

“Whenever you generate code that spans more than one file, create a Python script that can generate or modify the necessary files.”

## 24. Continue texts with specific starters

If you wish to extend a specific piece of text, frame your prompt with a starting phrase.

“I’m providing you with the beginning of a story: ‘Once upon a time in a distant land…’ Finish it based on this.”

## 25. State requirements clearly

Outline the specific requirements for the model’s output by clearly stating keywords, regulations, hints, or instructions.

“Your response must include three key points about renewable energy: benefits, challenges, and future potential.”

## 26. Mimic provided samples

To generate text similar to a provided example, include instructions such as, “Please use the same language based on the provided text.”

“Here’s a paragraph about artificial intelligence: ‘AI is transforming industries by…’ Please use the same language based on this example to write about machine learning.”

## Top 3 Prompting Techniques for Maximum Impact

Among the various strategies, three stand out for their potential impact: defining the audience, breaking down complex tasks, and using affirmative directives. By specifying the intended audience in your prompts, you tailor the model's responses to the appropriate level of expertise, ensuring relevance and depth. 

Breaking down complex tasks into simpler, sequential prompts encourages clearer and more focused outputs, facilitating understanding and engagement. Lastly, employing affirmative directives fosters directness and clarity in your requests, which can lead to more actionable and precise responses. By mixing and matching these techniques, you can refine your prompts to achieve optimal results, effectively enhancing the communication flow with LLMs.