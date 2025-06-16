<script lang="ts">
    import {cn} from '$lib/utils';

    let className = '';
    export {className as class};
</script>

<div
        class={cn('flex items-center px-6 [.border-t]:pt-6', className)}
        data-slot="card-footer"
>
    <slot/>
</div>