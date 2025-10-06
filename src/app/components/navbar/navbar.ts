import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarLink } from './types';
import { NavbarCenter } from './components/navbar-center';
import { NavbarSide } from './components/navbar-side';
import { NavbarHamburgerMenu } from './components/navbar-hamburger-menu';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NavbarSide, NavbarCenter, NavbarHamburgerMenu],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  links = signal<NavbarLink[]>([
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
    {
      label: 'Support',
      path: '/support',
    },
  ]);
}
