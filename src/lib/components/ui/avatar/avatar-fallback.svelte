<script lang="ts">
    import {cn} from '$lib/utils';

    let className = '';
    export {className as class};
</script>

<div
        class={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
        data-slot="avatar-fallback"
>
    <slot/>
</div>