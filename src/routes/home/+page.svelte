<script lang="ts">
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';
    import {Avatar, Button, Card, Heading} from 'flowbite-svelte';
    import {getCurrentUser, logout as authLogout, type User} from '$lib/services/auth';

    let user: User | null = null;

    onMount(async () => {
        try {
            user = await getCurrentUser();
            if (!user) {
                goto('/');
            }
        } catch (error) {
            console.error('Failed to get user:', error);
            goto('/');
        }
    });

    function getInitials(name: string): string {
        return name
            .split(' ')
            .map(part => part.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2);
    }

    function handleLogout() {
        authLogout();
        goto('/');
    }
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-background p-4">
    <Card class="max-w-[vw] p-6 ms-0.5 me-0.5 dark:text-gray-200">
        <Heading>
            <span class="text-center">Home</span>
        </Heading>
        <div class="flex flex-col items-center gap-6">
            <Avatar class="w-24 h-24">
                Avatar: {user?.avatar}
                {#if user?.avatar}
                    <img src={user.avatar} alt={`${user.name}'s Avatar`}/>
                {/if}
                <div>{getInitials(user?.name || 'User')}</div>
            </Avatar>

            <div class="text-center">
                <p class="text-lg font-medium">Name: {user?.name || 'Unknown User'}</p>
                <p class="text-sm text-gray-500">Email: {user?.email}</p>
                {#if user?.provider}
                    <p class="text-xs mt-1 bg-gray-100 px-2 py-1 rounded-full inline-block">
                        Provider: {user.provider}
                    </p>
                {/if}
            </div>

            <Button onclick={handleLogout}>
                Logout
            </Button>
        </div>
    </Card>
</div>