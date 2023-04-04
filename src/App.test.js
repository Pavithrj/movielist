import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from './App';

xdescribe('App Component', () => {
  beforeEach(() => {
    const mockData = {
      results: [
        {
          title: 'The GodFather',
          overview: 'abc',
          release_date: '1972-03-14'
        },
        {
          title: 'The Shawshank Redemption',
          overview: 'xyz',
          release_date: '1994-09-23'
        }
      ]
    };
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData)
      })
    );
  })

  it("should generate snapshot", async () => {
    let component;
    await act(async () => {
      component = await render(<App />);
    })
    expect(component.asFragment()).toMatchSnapshot();
  })

  it("should render movie name", async () => {
    const { getByText } = render(<App />);
    await waitFor(() => getByText('The GodFather'));
    expect(getByText('The GodFather')).toBeInTheDocument();
  })

  it("should show correct movie name", async () => {
    let component;
    await act(() => {
      component = render(<App />);
    })
    const { container } = component;
    const searchBox = container.querySelector('#searchBox');
    userEvent.type(searchBox, 'god');
    expect(container.querySelectorAll(".movie").length).toBe(2);
    const searchButton = container.querySelector('#searchButton');
    await userEvent.click(searchButton);

    expect(container.querySelectorAll(".movie").length).toBe(1);
    expect(container.querySelectorAll('.movie')[0].querySelector('.title').textContent).toBe('The GodFather');
    expect(container.querySelectorAll('.movie')[0].querySelector('.rating').textContent);
    expect(container.querySelectorAll('.movie')[0].querySelector('.releaseDate').textContent);
  })

  it("should display an error message if user enters a movie name that is not present in the API", async () => {
    let component;
    await act(() => {
      component = render(<App />);
    })
    const { container } = component;
    const searchBox = container.querySelector('#searchBox');
    userEvent.type(searchBox, 'abcde');
    const searchButton = container.querySelector('#searchButton');
    await userEvent.click(searchButton);

    expect(container.querySelector(".title")).toBe(null);
  })
})