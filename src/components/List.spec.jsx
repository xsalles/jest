import {
  queryByText,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";
import userEvent from "@testing-library/user-event";

describe("List Component", () => {
  it("should show the elements in page", () => {
    const { getByText } = render(<List />);

    expect(getByText("Albert")).toBeInTheDocument();
    expect(getByText("Elon")).toBeInTheDocument();
    expect(getByText("Palmer")).toBeInTheDocument();
  });

  it("should be visible element on click in button", async () => {
    const { getByText, findByText, debug } = render(<List />);


    const addButton = screen.getByText("Add");
      
    debug();

    userEvent.click(addButton);

    debug();

     await waitFor(() => {
       expect(getByText("Halland")).toBeInTheDocument();
     } )

    // const element = await screen.findByText("Halland")

    // expect(element).toBeInTheDocument(); -> With findByText
  });

  it("should be visible element on click in button", async () => {
    const { getAllByText, queryByText } = render(<List />);


    const removeButtons = getAllByText("Remove");
      
    userEvent.click(removeButtons[0]);

     await waitFor(() => {
       expect(queryByText("Albert")).not.toBeInTheDocument();
     } )

    })
});
