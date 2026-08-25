import { describe, expect, it } from "vitest";
import { HOME_FAQ } from "./faq";
import { CLUSTER_PAGES, INDEXABLE_PATHS, LEGAL_PAGES } from "./site";

describe("SEO cluster", () => {
  it("includes home, intent pages and legal URLs", () => {
    expect(INDEXABLE_PATHS).toEqual([
      "/",
      "/que-es-copm",
      "/cambiar-usd-a-cop",
      "/invertir-pesos-digitales",
      "/carry-trade-peso-colombiano",
      "/crypto-colombia",
      "/nosotros",
      "/terminos",
      "/privacidad",
    ]);
  });

  it("gives every cluster page a title, description and nav label", () => {
    expect(CLUSTER_PAGES).toHaveLength(5);
    for (const page of CLUSTER_PAGES) {
      expect(page.title.length).toBeGreaterThan(20);
      expect(page.description.length).toBeGreaterThan(40);
      expect(page.navLabel.length).toBeGreaterThan(3);
    }
  });

  it("keeps legal pages honest and short-named", () => {
    expect(LEGAL_PAGES.map((page) => page.path)).toEqual([
      "/nosotros",
      "/terminos",
      "/privacidad",
    ]);
  });
});

describe("FAQ", () => {
  it("covers the eight YMYL questions", () => {
    const questions = HOME_FAQ.map((item) => item.question);
    expect(questions).toHaveLength(8);
    expect(questions.join(" ")).toMatch(/DigitalCOP/);
    expect(questions.join(" ")).toMatch(/pesos digitales|COPm/i);
    expect(questions.join(" ")).toMatch(/invertir/i);
    expect(questions.join(" ")).toMatch(/dólares/i);
    expect(questions.join(" ")).toMatch(/carry/i);
    expect(questions.join(" ")).toMatch(/Colombia/);
    expect(questions.join(" ")).toMatch(/fees/i);
  });

  it("does not invent a 1:1 peg or a published APY", () => {
    const blob = HOME_FAQ.map((item) => item.answer).join(" ");
    expect(blob).toMatch(/no afirma una paridad 1:1/i);
    expect(blob.toLowerCase()).not.toMatch(/\bapy\s*\d/);
  });
});
