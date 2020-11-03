<script>
    import {getStyleString} from '@lib/get-style-string';
    
    export let cardBg = 'var(--accent_white)';
    export let cardContentColor = 'var(--accent_8)';

    let style = getStyleString({cardBg, cardContentColor}) || '';

    $: style = getStyleString({cardBg, cardContentColor}) || ''
</script>

<style lang="less">
    .card {
        display: flex;
        flex-flow: column nowrap;
        width: max-content;
        padding: var(--gap);
        color: var(--card-content-color, var(--accent_8));
        background: var(--card-bg, var(--accent_white));
        border-radius: var(--b-radius);
    }
</style>

<article class="card" style={style} {...$$restProps}>
    <slot></slot>
</article>
