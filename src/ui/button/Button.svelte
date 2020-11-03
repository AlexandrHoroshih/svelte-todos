<script lang="ts">
  export let text = false;

  let clicked = false;

  const animateClick = () => {
    clicked = true;
    setTimeout(() => (clicked = false), 300);
  };
</script>

<style lang="postcss">
  button {
    --button-main-color: var(--light-green);
    --button-main-hover-color: var(--deep-green);
    --button-second-color: var(--accent_white);
    position: relative;
    padding: 0.5rem 1rem;
    font-family: inherit;
    font-weight: bold;
    color: var(--button-second-color);
    cursor: pointer;
    background-color: var(--button-main-color);
    border: none;
    border-radius: var(--b-radius);
    transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out,
      transform 0.1s ease-in-out;

    &:hover {
      background-color: var(--button-main-hover-color);
    }
  }

  .clicked {
    transform: scale(1.1);
  }

  .text {
    --button-second-color: var(--button-main-color);
    background: none;

    &:hover {
      color: var(--deep-green);
      background-color: var(--accent_1);
    }
  }
</style>

<button
  type="button"
  class:text
  class:clicked
  on:click={animateClick}
  on:click
  {...$$restProps}>
  <slot />
</button>
