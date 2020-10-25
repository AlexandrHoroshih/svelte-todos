<style>
    @import-normalize;

    :global(*),
    :global(*:before),
    :global(*:after) {
        margin: 0;
    }

    :global(body) {
        /* colors */
        --accent_0: #F8F9FA;
        --accent_1: #E9ECEF;
        --accent_2: #DEE2E6;
        --accent_3: #CED4DA;
        --accent_4: #ADB5BD;
        --accent_5: #6C757D;
        --accent_6: #495057;
        --accent_7: #343A40;
        --accent_8: #212529;
        --violet: #540D6E;
        --red: #EE4266;
        --yellow: #FFD23F;
        --light-green: #3BCEAC;
        --deep-green: #0EAD69;

        /* typography */
        --base-font-size: 16px;

        font-family: 'Montserrat', sans-serif;
        font-size: var(--base-font-size);
        font-weight: normal;

        line-height: 1.25;
        color: var(--accent_6);
        background-color: var(--accent_2);

        /* rest */
        --gap: 1rem;
        --b-radius: 0.5rem;
    }

    :global(h1),
    :global(.as-h1) {
        font-size: 3.125rem;
        font-weight: 500;
    }

    :global(h2),
    :global(.as-h2) {
        font-size: 2.375rem;
        font-weight: 500;
    }

    :global(h3),
    :global(.as-h3) {
        font-size: 1.75rem;
    }

    :global(h4),
    :global(.as-h4) {
        font-size: 1.3125rem;
    }

    :global(h5),
    :global(.as-h5) {
        font-size: 1rem;
        font-weight: 500;
    }

    :global(h6),
    :global(p) {
        font-size: 1rem;
        font-weight: normal;
    }
</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet"> 
</svelte:head>
