import type { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'QuestDesignSystemCopLightTheme';
import Frame4Comp from 'components/Frame4/Frame4';

const Docs: NextPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <div>
          <Head>
            <title>Quest Docs</title>
            <meta name='description' content='The easiest way to build the front end for your enterprise application starts here' />
            <link rel='icon' href='/favicon.ico' />
          </Head>
          <main>
            <Frame4Comp />
          </main>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Docs;
