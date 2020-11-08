<script lang="ts">
    import * as routes from '@src/pages/routes';
    import Root from '@src/pages/Root.svelte';
    import About from '@src/pages/About.svelte'

    const rootVisible = routes.exactRoot.visible;
    const aboutVisible = routes.about.visible;

</script>

{#if $rootVisible}
    <Root />
{/if}

{#if $aboutVisible}
    <About />
{/if}

