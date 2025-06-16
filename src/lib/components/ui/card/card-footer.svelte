<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<div
  data-slot="card-footer"
  class={cn('flex items-center px-6 [.border-t]:pt-6', className)}
>
  <slot />
</div>