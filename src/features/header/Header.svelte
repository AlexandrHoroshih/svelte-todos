<script lang="ts">
  import IoMdJournal from 'svelte-icons/io/IoMdJournal.svelte';
</script>

<style>
  .header {
    grid-area: header;
    width: 100%;
    min-width: var(--content-min-width);
    max-width: var(--content-max-width);
    padding-bottom: var(--gap);
    margin: var(--gap) auto;
    border-bottom: 1px solid var(--accent_3);
  }

  .header-link {
    display: flex;
    color: var(--deep-green);
    text-decoration: underline;
  }

  .header-link > :global(svg) {
    max-width: 3rem;
    margin-right: var(--gap);
  }
</style>

<header class="header">
  <h1>
    <a class="header-link no-link-animation" href="/">
      <IoMdJournal class="icon" />
      Тудушки!
    </a>
  </h1>
</header>
