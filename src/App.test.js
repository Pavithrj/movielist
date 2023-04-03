import React from 'react';
import { render, waitFor } from '@testing-library/react';
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
})