<script>
    import '../app.css';
    import {page} from '$app/state';
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';

    import {getCurrentUser} from '$lib/services/auth';

    let isLoading = true;

    onMount(async () => {
        try {
            const user = await getCurrentUser();
            const isAuthenticated = user !== null;
            const currentPath = page.url.pathname;

            // Handle authentication redirects
            if (currentPath === '/' && isAuthenticated) {
                goto('/home');
            } else if (currentPath === '/home' && !isAuthenticated) {
                goto('/');
            }
        } catch (error) {
            console.error('Authentication check failed:', error);
        } finally {
            isLoading = false;
        }
    });
</script>

{#if isLoading}
    <div class="flex items-center justify-center min-h-screen">
        <div class="animate-spin text-2xl">⟳</div>
    </div>
{:else}
    <slot/>
{/if}
