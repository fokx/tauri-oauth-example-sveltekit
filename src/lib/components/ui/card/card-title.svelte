<script lang="ts">
    import {cn} from '$lib/utils';

    let className = '';
    export {className as class};
</script>

<h3
        class={cn('leading-none font-semibold', className)}
        data-slot="card-title"
>
    <slot/>
</h3>