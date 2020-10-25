<script>
import Header from './features/header/Header.svelte';
import ContentWrapper from './features/content/Content.svelte';
import Footer from './features/footer/Footer.svelte';
import Sidenav from './features/sidenav/Sidenav.svelte';
import ThemeProvider from './theme/ThemeProvider.svelte';

</script>

<style>
    :global(body) {
        --content-min-width: 600px;
        --content-max-width: 900px;
        display: grid;
        grid-template-areas: 
            "header header header"
            "left   content right"
            "footer footer footer"
        ;
        grid-template-rows: auto minmax(calc(100vh - 80px - 100px), auto) minmax(100px, auto);
        grid-template-columns: 1fr minmax(var(--content-min-width), var(--content-max-width)) 1fr;
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
</ContentWrapper>
<Footer />
