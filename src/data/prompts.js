export const prompts = [
  {
    id: 1,
    title: "Senior React Developer",
    content: "Act as a Senior React Developer. I will provide you with a piece of code, and you will review it, pointing out any performance issues, anti-patterns, or accessibility problems. Suggest improvements and explain the 'why' behind each suggestion.",
    tags: ["Coding", "React", "Review"]
  },
  {
    id: 2,
    title: "English to Japanese Translator",
    content: "You are a professional translator. Translate the following English text into natural, business-level Japanese. Maintain the tone and nuance of the original text. \n\n[Insert Text Here]",
    tags: ["Translation", "Japanese", "Business"]
  },
  {
    id: 3,
    title: "Blog Post Generator",
    content: "Write a comprehensive blog post about [Topic]. The post should include an engaging introduction, structured body paragraphs with clear headings, and a concluding summary. Use an informative but accessible tone.",
    tags: ["Writing", "Content", "Blog"]
  },
  {
    id: 4,
    title: "Explain Like I'm 5",
    content: "Explain the concept of [Complex Topic] to me as if I were a 5-year-old. Use simple analogies and avoid jargon.",
    tags: ["Education", "Simplification"]
  },
  {
    id: 5,
    title: "Linux Terminal Simulator",
    content: "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}. my first command is pwd",
    tags: ["Simulation", "Linux", "Fun"]
  },
  {
    id: 6,
    title: "不足があれば質問してもらう",
    content: "情報が不足している場合は回答前に質問して",
    tags: ["Quality Control", "Clarification"]
  },
  {
    id: 7,
    title: "弱点を自己診断させる",
    content: "上の回答の欠点と改善案を3つ挙げて",
    tags: ["Review", "Self-Correction", "Improvement"]
  },
  {
    id: 8,
    title: "例えば話で抽象を具体に落とす",
    content: "初心者にもわかるよう、日常のたとえ話を交えて説明して",
    tags: ["Explanation", "Analogy", "Beginner"]
  },
  {
    id: 9,
    title: "悪い例も並べて比較学習",
    content: "良い例と悪い例をセットで示して",
    tags: ["Comparison", "Learning", "Examples"]
  },
  {
    id: 10,
    title: "トーン＆マナーの調整",
    content: "専門家向けにフォーマルかつ緊急性を感じるトーンで書いて",
    tags: ["Writing", "Tone", "Style"]
  },
  {
    id: 11,
    title: "出力形式を先に指定しておく",
    content: "Markdownで3つの見出しと各3行の箇条書きにまとめて",
    tags: ["Formatting", "Markdown", "Structure"]
  },
  {
    id: 12,
    title: "「なぜ？」を3連発で核心へ",
    content: "この結論について『なぜ』を3回繰り返して深掘りして",
    tags: ["Deep Dive", "Reasoning", "Logic"]
  },
  {
    id: 13,
    title: "反対立場モードで視野拡張",
    content: "この主張に反対する立場で3つの根拠を挙げて",
    tags: ["Critical Thinking", "Debate", "Perspective"]
  },
  {
    id: 14,
    title: "語彙と文体にバリエーションを求める",
    content: "同じ意味を保ちつつ語尾や語彙を変えて自然なリズムで書いて",
    tags: ["Writing", "Vocabulary", "Flow"]
  },
  {
    id: 15,
    title: "「わからない」を許す",
    content: "不明な場合は『わかりません』と明記して",
    tags: ["Accuracy", "Honesty", "Hallucination Prevention"]
  }
];
