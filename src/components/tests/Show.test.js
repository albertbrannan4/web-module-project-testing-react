import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Show from "./../Show";
import userEvent from "@testing-library/user-event";

const seasonsData = {
  name: "Dragon Ball",
  summary: "This is the summary yo",
  seasons: [
    {
      id: 1,
      name: "Season 1",
      episodes: [],
    },
    {
      id: 2,
      name: "Season 2",
      episodes: [],
    },
  ],
};

test("renders without errors", () => {
  render(<Show />);
});

test("renders Loading component when prop show is null", () => {
  render(<Show show={null} />);
  const value = screen.queryByText(/Fetching data.../i);
  expect(value).not.toBeNull();
});

test("renders same number of options seasons are passed in", () => {
  render(<Show show={seasonsData} selectedSeason="none" />);
  const seasonOption = screen.queryAllByTestId("season-option");
  expect(seasonOption).toHaveLength(2);
});

test("handleSelect is called when an season is selected", () => {
  const handleSelect = jest.fn();
  render(
    <Show
      show={seasonsData}
      selectedSeason={"none"}
      handleSelect={handleSelect}
    />
  );

  const select = screen.getByLabelText(/Select A Season/i);
  fireEvent.change(select, { target: { value: "1" } });
  expect(handleSelect).toHaveBeenCalledTimes(1);
});

test("component renders when no seasons are selected and when rerenders with a season passed in", () => {
  const { rerender } = render(
    <Show show={seasonsData} selectedSeason={"none"} />
  );

  let episodes = screen.queryByTestId("episodes-container");
  expect(episodes).not.toBeInTheDocument();
  rerender(<Show show={seasonsData} selectedSeason={1} />);
  expect(episodes).toBeInTheDocument();
});
