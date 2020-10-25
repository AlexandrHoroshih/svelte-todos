<script>
import Header from './features/header/Header.svelte';
import ContentWrapper from './features/content/Content.svelte';
import Footer from './features/footer/Footer.svelte';
import Sidenav from './features/sidenav/Sidenav.svelte';
import ThemeProvider from './theme/ThemeProvider.svelte';

</script>

<style>
    :global(h1) {
        color: red;
    }

    :global(body) {
        --content-min-width: calc(100vh - 80px - 100px);
        display: grid;
        grid-template-areas: 
            "header header header"
            "left   content right"
            "footer footer footer"
        ;
        grid-template-rows: minmax(auto, 80px) minmax(var(--content-min-width), auto) minmax(100px, auto);
        grid-template-columns: 1fr minmax(900px) 1fr;
    }
</style>

<ThemeProvider />
<Header />
<Sidenav />
<ContentWrapper>
    Hello world
</ContentWrapper>
<Footer />
