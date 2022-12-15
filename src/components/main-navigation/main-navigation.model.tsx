export interface INavLink {
  to: string;
  name: string;
}

export const NAV_LINKS: INavLink[] = [
  {
    to: "/user",
    name: "User",
  },
  {
    to: "/service",
    name: "Service",
  },
  {
    to: "/about-us",
    name: "About us",
  },
  {
    to: "/recruitment",
    name: "Recruitment",
  },
];
