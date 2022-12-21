export interface INavLink {
  to: string;
  name: string;
}

export const NAV_LINKS: INavLink[] = [
  // {
  //   to: "/user",
  //   name: "User",
  // },
  {
    to: "/service",
    name: "Service",
  },
  {
    to: "/production",
    name: "Production",
  },
  {
    to: "/recruitment",
    name: "Recruitment",
  },
  {
    to: "/about-us",
    name: "About us",
  },
  {
    to: "/admin",
    name: "Admin",
  },
];
