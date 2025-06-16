<script lang="ts">
    import {cn} from '$lib/utils';

    let className = '';
    export {className as class};
</script>

<div
        class={cn('px-6', className)}
        data-slot="card-content"
>
    <slot/>
</div>