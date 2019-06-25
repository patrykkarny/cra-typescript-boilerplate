export type ThemePackageType = {
  color: {
    primary: string;
  };
};

export type ThemeType = {
  [key: string]: ThemePackageType;
};
