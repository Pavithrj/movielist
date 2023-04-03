import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';


describe("Header Component", () => {
    it('renders learn react link', () => {
        const { asFragment } = render(<Header title="test title"/>);
        expect(asFragment()).toMatchSnapshot();
    });
})