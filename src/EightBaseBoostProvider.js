// @flow

import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ModalProvider } from './atoms/Modal/ModalProvider';
import { IconsProvider } from './atoms/typography/Icon/IconsProvider';
import { createTheme, resetGlobal, type Theme } from './theme';

type EightBaseBoostProviderProps = {
  theme?: Theme,
  icons?: { [name: string]: React$Node },
  children: React$Node,
};

class EightBaseBoostProvider extends React.Component<EightBaseBoostProviderProps> {
  theme: *;

  constructor(props: EightBaseBoostProviderProps) {
    super(props);

    this.theme = props.theme || createTheme();
  }

  componentDidMount() {
    resetGlobal();
  }

  render() {
    const { children, icons } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
        <ModalProvider>
          <IconsProvider icons={ icons }>
            { children }
          </IconsProvider>s
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

export { EightBaseBoostProvider };
