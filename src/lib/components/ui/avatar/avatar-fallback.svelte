<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<div
  data-slot="avatar-fallback"
  class={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
>
  <slot />
</div>