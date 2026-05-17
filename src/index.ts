type Signal = {
  label: string;
  score: number;
  weight: number;
};

const signals: Signal[] = [
  { label: "Relevance", score: 4.5, weight: 0.3 },
  { label: "Confidence", score: 4.0, weight: 0.25 },
  { label: "Source Quality", score: 3.8, weight: 0.25 },
  { label: "Decision Impact", score: 4.2, weight: 0.2 }
];

function calculateWeightedScore(items: Signal[]): number {
  const total = items.reduce((sum, item) => {
    return sum + item.score * item.weight;
  }, 0);

  return Number(total.toFixed(2));
}

function classifyScore(score: number): string {
  if (score >= 4) return "High signal strength";
  if (score >= 2.5) return "Moderate signal strength";
  return "Low signal strength";
}

const finalScore = calculateWeightedScore(signals);

console.log("Signal Weighting Core");
console.log("---------------------");
console.log("Weighted Score:", finalScore);
console.log("Classification:", classifyScore(finalScore));
