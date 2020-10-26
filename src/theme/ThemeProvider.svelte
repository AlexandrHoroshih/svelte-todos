<script>
    import 'focus-visible';
</script>

<style lang="less">
    @import-normalize;

    :global(*),
    :global(*:before),
    :global(*:after) {
        box-sizing: border-box !important;
        margin: 0;
    }

    :global(*:focus.focus-visible) {
      outline: var(--deep-green, blue) solid 2px;
    }

    :global(.js-focus-visible :focus:not(.focus-visible)) {
      outline: none;
    }

    :global(body) {
        /* colors */
        --accent_white: #FFFFFF;
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
        font-weight: 400;

        line-height: 1.25;
        color: var(--accent_7);
        background-color: var(--accent_0);

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

    :global(button) {
        --button-main-color: var(--light-green);
        --button-main-hover-color: var(--deep-green);
        --button-second-color: var(--accent_white);
        padding: 0.5rem 1rem;
        font-family: inherit;
        font-weight: bold;
        color: var(--button-second-color);
        cursor: pointer;
        background-color: var(--button-main-color);
        border: none;
        border-radius: var(--b-radius);
        transition: background-color 0.3s ease-out;

        &:hover {
            background-color: var(--button-main-hover-color);
        }
    }

    :global(button.text) {
        --button-second-color: var(--button-main-color);
        background: none;
    }

    :global(a) {
        --link-main-color: var(--deep-green);
        --link-main-hover-color: var(--deep-green);
        position: relative;
        font-weight: inherit;
        color: var(--link-main-color);
        text-decoration: none;
        transition: color 0.3s ease-in;

        &:before {
            --expand-tap-size: -0.5rem;
            position: absolute;
            top: var(--expand-tap-size);
            right: var(--expand-tap-size);
            bottom: var(--expand-tap-size);
            left: var(--expand-tap-size);
            display: block;
            content: " ";
        }

        &:after {
            position: absolute;
            right: 51%;
            bottom: 0;
            left: 51%;
            display: block;
            content: " ";
            border-bottom: 2px solid var(--link-main-hover-color);
            transition: 0.3s ease-out;
            transition-property: left, right;
        }

        &:hover {
            color: var(--link-main-hover-color);

            &:after {
                right: 0;
                left: 0;
            }
        }
    }

    :global(a.no-link-animation) {
        &:after {
            display: none;
        }
    }
</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet"> 
</svelte:head>
