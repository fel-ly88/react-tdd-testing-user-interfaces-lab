import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Felister`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm felister/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});


test("displays an image of me with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of felister/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});


test("displays a second-level heading with text 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test("displays a paragraph for my biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a software developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("includes links to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/fel-ly88");

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourprofile");
});
