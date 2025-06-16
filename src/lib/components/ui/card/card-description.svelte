<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<p
  data-slot="card-description"
  class={cn('text-muted-foreground text-sm', className)}
>
  <slot />
</p>