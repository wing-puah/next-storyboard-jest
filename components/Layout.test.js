import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
  it('renders correct', () => {
    const el = shallow(<Layout />);
    expect(el).toMatchSnapshot();
  });
});
