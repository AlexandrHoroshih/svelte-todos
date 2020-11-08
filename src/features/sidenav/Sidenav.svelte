<script lang="ts">
    import * as routes from '@src/pages/routes';
    import {useNavigate} from '@lib/trace-router-svelte';

</script>

<style>
  .sidenav {
    grid-area: left;
  }
</style>

<aside class="sidenav">
  <nav>
    <ul>
      <li><a on:click={useNavigate(routes.exactRoot)} href="/">Home</a></li>
      <li><a on:click={useNavigate(routes.about)} href="/">About</a></li>
    </ul>
  </nav>
</aside>
