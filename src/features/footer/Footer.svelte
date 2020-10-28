<style lang="less">
  .footer {
    grid-area: footer;
    height: 100%;
    color: var(--accent_4);
    background-color: var(--accent_2);
  }

  .footer__content {
    width: 100%;
    min-width: var(--content-min-width);
    max-width: var(--content-max-width);
    padding: var(--gap) 0 calc(2 * var(--gap));
    margin: 0 auto;

    & > * {
      font-weight: 700;
    }

    & > *:not(:last-child) {
      margin-bottom: var(--gap);
    }
  }
</style>

<footer class="footer">
  <div class="footer__content">
    <p class="as-h2">Тудушки!</p>
    <p>Приложение на Свелте, чтобы попробовать и посмотреть что тут и как</p>
  </div>
</footer>
