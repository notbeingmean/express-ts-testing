export function getGrade(score: number) {
  if (!Number.isInteger(score)) return "Invalid Type";
  if (score > 100 || score < 0) return "Invalid score";

  if (score >= 80) return "A";
  if (score >= 75) return "B+";
  if (score >= 70) return "B";
  if (score >= 65) return "C+";
  if (score >= 60) return "C";
  if (score >= 55) return "D+";
  if (score >= 50) return "D";
  return "F";
}
