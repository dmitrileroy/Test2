import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystemCopLightTheme';
import Card18Comp from 'components/Card18/Card18';

const Card18: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Card-18</title>
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <Card18Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Card18;
