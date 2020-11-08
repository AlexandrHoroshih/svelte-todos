<script lang="ts">
  import Header from '@src/features/header/Header.svelte';
  import ContentWrapper from '@src/features/content/Content.svelte';
  import Footer from '@src/features/footer/Footer.svelte';
  import Sidenav from '@src/features/sidenav/Sidenav.svelte';
  import ThemeProvider from '@src/features/theme-provider/ThemeProvider.svelte';
    import PagesProvider from '@src/pages/PagesProvider.svelte';

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
    <PagesProvider />
</ContentWrapper>
<Footer />
