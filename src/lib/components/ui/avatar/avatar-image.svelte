<script lang="ts">
  import { cn } from '$lib/utils';
  
  export let src: string = '';
  export let alt: string = '';
  
  let className = '';
  export { className as class };
</script>

<img
  data-slot="avatar-image"
  {src}
  {alt}
  class={cn('aspect-square size-full', className)}
/>