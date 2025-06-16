<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<div
  data-slot="avatar"
  class={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
>
  <slot />
</div>