<script lang="ts">
    import {cn} from '$lib/utils';

    let className = '';
    export {className as class};
</script>

<p
        class={cn('text-muted-foreground text-sm', className)}
        data-slot="card-description"
>
    <slot/>
</p>