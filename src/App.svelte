<script lang="ts">
  import {createBrowserHistory} from 'history';
  
  import Header from '@src/features/header/Header.svelte';
  import ContentWrapper from '@src/features/content/Content.svelte';
  import Footer from '@src/features/footer/Footer.svelte';
  import Sidenav from '@src/features/sidenav/Sidenav.svelte';
  import ThemeProvider from '@src/features/theme-provider/ThemeProvider.svelte';
  import Button from '@src/ui/button/Button.svelte';
  import Card from '@src/ui/card/Card.svelte';
  import {createRouter} from '@lib/effector-history-router';

  const router = createRouter({history: createBrowserHistory()});

  router.state.watch(console.log);

  const testClick = (e) => {
    router.pushFx('page')
    router.goBackFx()
  };

</script>

<style>
  :global(body) {
    --content-min-width: 600px;
    --content-max-width: 900px;
    display: grid;
    grid-template-areas:
      'header header header'
      'left   content right'
      'footer footer footer';
    grid-template-rows: auto 1fr minmax(
        10vh,
        auto
      );
    grid-template-columns:
      1fr minmax(var(--content-min-width), var(--content-max-width))
      1fr;
    height: 100vh;
  }
</style>

<ThemeProvider />
<Header />
<Sidenav />
<ContentWrapper>
  <h1>Hello world</h1>
  <h2>Hello world</h2>
  <h3>Hello world</h3>
  <h4>Hello world</h4>
  <h5>Hello world</h5>
  <h6>Hello world</h6>
  <p>Hello world</p>
  <Button on:click={testClick}>Кнопка</Button>
  <a href="/dd">Ссылка</a>
  <Card>
    content
  </Card>
</ContentWrapper>
<Footer />
