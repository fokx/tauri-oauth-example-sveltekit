<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<div
  data-slot="card-content"
  class={cn('px-6', className)}
>
  <slot />
</div>