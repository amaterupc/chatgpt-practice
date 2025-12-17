export const prompts = [
  {
    id: 2,
    title: "英日翻訳",
    content: "あなたはプロの翻訳家です。以下の英文を、自然でビジネスレベルの日本語に翻訳してください。元のテキストのトーンやニュアンスを維持してください。\n\n[ここにテキストを入力]",
    tags: ["Translation", "Japanese", "Business"]
  },
  {
    id: 3,
    title: "ブログ記事生成",
    content: "[トピック]に関する包括的なブログ記事を書いてください。記事には、魅力的な導入、明確な見出しを持つ構成された本文、そして結論となる要約を含めてください。有益でありながら、親しみやすいトーンを使用してください。",
    tags: ["Writing", "Content", "Blog"]
  },
  {
    id: 4,
    title: "5歳児に説明する",
    content: "[複雑なトピック]の概念を、まるで私が5歳児であるかのように説明してください。単純な例えを使い、専門用語は避けてください。",
    tags: ["Education", "Simplification"]
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
