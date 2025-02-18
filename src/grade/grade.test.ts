import { getGrade } from "./grade";

describe("getGrade Success Case", () => {
  it("should return A when score is 100", () => {
    const score = 100;
    const expected = "A";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return A when score is 989", () => {
    const score = 89;
    const expected = "A";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B+ when score is 79", () => {
    const score = 79;
    const expected = "B+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B+ when score is 78", () => {
    const score = 78;
    const expected = "B+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B+ when score is 75", () => {
    const score = 75;
    const expected = "B+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B when score is 74", () => {
    const score = 74;
    const expected = "B";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B when score is 73", () => {
    const score = 73;
    const expected = "B";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B when score is 71", () => {
    const score = 71;
    const expected = "B";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return B when score is 70", () => {
    const score = 70;
    const expected = "B";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C+ when score is 69", () => {
    const score = 69;
    const expected = "C+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C+ when score is 68", () => {
    const score = 68;
    const expected = "C+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C+ when score is 66", () => {
    const score = 66;
    const expected = "C+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C+ when score is 65", () => {
    const score = 65;
    const expected = "C+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C when score is 64", () => {
    const score = 64;
    const expected = "C";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C when score is 63", () => {
    const score = 63;
    const expected = "C";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C when score is 61", () => {
    const score = 61;
    const expected = "C";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return C when score is 60", () => {
    const score = 60;
    const expected = "C";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D+ when score is 59", () => {
    const score = 59;
    const expected = "D+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D+ when score is 58", () => {
    const score = 58;
    const expected = "D+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D+ when score is 56", () => {
    const score = 56;
    const expected = "D+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D+ when score is 55", () => {
    const score = 55;
    const expected = "D+";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D when score is 54", () => {
    const score = 54;
    const expected = "D";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D when score is 53", () => {
    const score = 53;
    const expected = "D";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D when score is 51", () => {
    const score = 51;
    const expected = "D";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return D when score is 50", () => {
    const score = 50;
    const expected = "D";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return F when score is 49", () => {
    const score = 49;
    const expected = "F";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return F when score is 1", () => {
    const score = 1;
    const expected = "F";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return F when score is 0", () => {
    const score = 0;
    const expected = "F";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });
});

describe("getGrade Alternative Case", () => {
  it("should return Invalid Input when score is 101", () => {
    const score = 101;
    const expected = "Invalid score";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return Invalid Input when score is -1", () => {
    const score = -1;
    const expected = "Invalid score";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });

  it("should return Invalid Type when score is 29.99", () => {
    const score = 29.99;
    const expected = "Invalid Type";

    const result = getGrade(score);

    expect(expected).toBe(result);
  });
});
