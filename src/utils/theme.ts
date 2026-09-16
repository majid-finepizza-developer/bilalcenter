export type Theme = "light" | "dark";

export const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const getTheme = (): Theme => {
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) || "light"
  );
};

export const initTheme = (): void => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const activeTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  setTheme(activeTheme);
};
