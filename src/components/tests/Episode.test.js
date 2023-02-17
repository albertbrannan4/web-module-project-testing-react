import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Episode from "./../Episode";

test("renders without error", () => {
  render(<Episode episode={exampleEpisodeData} />);
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={exampleEpisodeData} />);

  const text = exampleEpisodeData.summary;
  const searchSummary = screen.queryByText(text);
  expect(searchSummary).toBeInTheDocument();
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={DragonBallEpisodeData} />);

  const text = DragonBallEpisodeData.summary;
  const searchSummary = screen.queryByText(text);
  expect(searchSummary).toBeInTheDocument();
});

test("renders the summary test passed as prop", () => {
  render(<Episode episode={DragonBall2EpisodeData} />);

  const text = DragonBall2EpisodeData.summary;
  const searchSummary = screen.queryByText(text);
  expect(searchSummary).toBeInTheDocument();
});

test("renders default image when image is not defined", () => {
  render(<Episode episode={exampleEpisodeData2} />);

  const imagePath = screen.queryByAltText(
    "https://i.ibb.co/2FsfXqM/stranger-things.png"
  );
  expect(imagePath).toBeInTheDocument();
});

// ----- EXAMPLE EPISODE TEST OBJECT -----
const exampleEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

const exampleEpisodeData2 = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553946,

  name: "Chapter One: The Vanishing of Will Byers",
  number: 1,
  rating: { average: 8.2 },
  runtime: 49,
  season: 1,
  summary:
    "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
  type: "regular",
  url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
};

const DragonBallEpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553947,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  name: "(Sub) The Emperors Quest",
  number: 2,
  rating: { average: 10 },
  runtime: 25,
  season: 1,
  summary:
    "Goku and Bulma aren't the only ones looking for Dragon Balls. The little warrior runs into a couple of Emperor Pilaf's henchmen during his search for a late night snack.",
  type: "regular",
  url: "https://www.youtube.com/watch?v=W2iR3jnvG-M",
};

const DragonBall2EpisodeData = {
  airdate: "2016-07-15",
  airstamp: "2016-07-15T12:00:00+00:00",
  airtime: "",
  id: 553948,
  image:
    "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
  name: "(Sub) The Nimbus Cloud of Roshi",
  number: 2,
  rating: { average: 10 },
  runtime: 25,
  season: 1,
  summary:
    "Bulma gets annoyed when Goku slows things down to help a lost tortoise, but his good deed could speed up their quest to collect the seven Dragon Balls",
  type: "regular",
  url: "https://www.youtube.com/watch?v=W2iR3jnvG-M",
};
