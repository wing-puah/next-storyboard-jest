import { shallow, mount } from 'enzyme';
import Link from 'next/link';
import Navigation from './navigation';
import routes from './mockRoutes';

describe('Navigation', () => {
  const router = {
    asPath: '/',
    route: '/',
  };
  const nav = mount(<Navigation router={router} />);
  console.log(nav.debug());
  console.log(nav.find('a.active').debug());

  it('should render the full length of the available routes', () => {
    expect(nav.find('a').length).toEqual(routes.length);
  });

  it('should add only 1 active className to current page', () => {
    expect(nav.find('a.active').length).toEqual(1);
    expect(nav.find('a.active').contains('Home')).toBeTruthy();
  });
});
