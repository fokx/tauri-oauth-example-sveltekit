<script lang="ts">
  import { cn } from '$lib/utils';
  
  let className = '';
  export { className as class };
</script>

<h3
  data-slot="card-title"
  class={cn('leading-none font-semibold', className)}
>
  <slot />
</h3>