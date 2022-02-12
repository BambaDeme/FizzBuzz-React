import React from "react";
import { fizzbuzz } from "../components/fizzBuzz";

describe("fizzbuzz", () => {
  it("Doit retourner le nombre passé en paramétre si celui-ci n'est pas divisible  pasr 3 ni par 5", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(4)).toBe(4);
    expect(fizzbuzz(7)).toBe(7);
    expect(fizzbuzz(8)).toBe(8);
    expect(fizzbuzz(11)).toBe(11);
  });

  it("Doit retourner 'fizz' si le nombre passé est divisible par 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
    expect(fizzbuzz(12)).toBe("Fizz");
  });

  it("Doit retourner 'buzz' si le nombre passé est divisible par 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
    expect(fizzbuzz(20)).toBe("Buzz");
  });

  it("Doit retourner 'fizzbuzz' si le nombre passé est divisible par 3 et par 5", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
    expect(fizzbuzz(45)).toBe("FizzBuzz");
  });
});
