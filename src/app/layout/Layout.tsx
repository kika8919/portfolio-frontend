import { Outlet } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react';

import { AppRoute } from 'routing/AppRoute.enum';
import './Layout.css';
import { useState } from 'react';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <p className="font-bold text-inherit">Kavita Gupta</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link href={AppRoute.home}>Features</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href={AppRoute.users}>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href={AppRoute.help}>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="app__main">
        <Outlet />
      </main>
    </div>
  );
};
