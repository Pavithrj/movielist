import { render } from '@testing-library/react';
import Header from './Header';


xdescribe("Header Component", () => {
    it('renders learn react link', () => {
        const { asFragment } = render(<Header title="test title"/>);
        expect(asFragment()).toMatchSnapshot();
    });
})