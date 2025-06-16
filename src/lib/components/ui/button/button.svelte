<script lang="ts">
    import {cn} from '$lib/utils';
    import {buttonVariants, type ButtonVariants} from '.';

    type $$Props = {
        variant?: ButtonVariants['variant'];
        size?: ButtonVariants['size'];
        class?: string;
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
    };

    export let variant: $$Props['variant'] = undefined;
    export let size: $$Props['size'] = undefined;
    export let type: $$Props['type'] = 'button';
    export let disabled: $$Props['disabled'] = false;
    export {className as class};
    let className = '';
</script>

<button
        {...$$restProps}
        class={cn(buttonVariants({ variant, size }), className)}
        {disabled}
        on:click
        {type}
>
    <slot/>
</button>