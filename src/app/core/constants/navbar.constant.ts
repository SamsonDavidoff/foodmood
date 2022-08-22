export interface NavbarItem {
  id: number;
  title: string;
  route: string;
}

export const navbarItems: NavbarItem[] = [
  {
    id: 1,
    title: 'Home',
    route: '/'
  },
  {
    id: 2,
    title: 'Students',
    route: '/students'
  },
  {
    id: 3,
    title: 'Teachers',
    route: '/teachers'
  },
  {
    id: 4,
    title: 'Classes',
    route: '/classes'
  },
  {
    id: 5,
    title: 'About',
    route: '/about'
  },
]
