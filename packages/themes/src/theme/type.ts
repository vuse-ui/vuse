interface ITheme {
  id: string;
  name: string;
  data: {
    [cssName: string]: string;
  };
}

export class Theme {
  id: string;
  name: string;
  data: {
    [cssName: string]: string;
  };

  constructor(theme: ITheme) {
    this.id = theme.id;
    this.name = theme.name;
    this.data = theme.data;
  }
}
