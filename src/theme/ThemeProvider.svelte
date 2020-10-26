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
    --accent_white: #ffffff;
    --accent_0: #f8f9fa;
    --accent_1: #e9ecef;
    --accent_2: #dee2e6;
    --accent_3: #ced4da;
    --accent_4: #adb5bd;
    --accent_5: #6c757d;
    --accent_6: #495057;
    --accent_7: #343a40;
    --accent_8: #212529;
    --violet: #540d6e;
    --red: #ee4266;
    --yellow: #ffd23f;
    --light-green: #3bceac;
    --deep-green: #0ead69;

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
      content: ' ';
    }

    &:after {
      position: absolute;
      right: 51%;
      bottom: 0;
      left: 51%;
      display: block;
      content: ' ';
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
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
</svelte:head>
