// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
interface EXP {
  heroImage: string;
  compName: string;
  title: string;
  duration: string;
}

export const SITE_TITLE = "Ani.";
export const SITE_DESCRIPTION = "Welcome to my website!";

export const EXPERIENCES: Array<EXP> = [
  {
    compName: "Promotee",
    duration: "Jul 2022 -Aug 2022",
    heroImage:
      "https://media.licdn.com/dms/image/C4D0BAQFpJaS0fwsJ_g/company-logo_200_200/0/1674059706618?e=1698883200&v=beta&t=qq9vsio11c-8pHqgatPrpjI8v19wo7rAWunz8pp-2e8",
    title: "Front-end Developer Intern",
  },
];
