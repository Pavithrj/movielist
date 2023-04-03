import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Components/Header';

test('renders learn react link', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});

describe("Header Component", () => {
    it("Should print header title", () => {
        const { container } = render(<Header title="Movie Heist" />);
        const header = container.querySelector('#title');
        userEvent.type(header, 'Movie Heist');

        expect(container.querySelector('#title').textContent).toBe("Movie Heist");
    })
})