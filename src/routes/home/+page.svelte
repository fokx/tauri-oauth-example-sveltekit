<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { Button } from '$lib/components/ui/button';
  import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
  import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
  import { type User, logout as authLogout, getCurrentUser } from '$lib/services/auth';
  
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
  <Card class="w-full max-w-md">
    <CardHeader>
      <CardTitle class="text-center">Home</CardTitle>
    </CardHeader>
    <CardContent class="flex flex-col items-center gap-6">
      <Avatar class="w-24 h-24">
        {#if user?.avatar}
          <AvatarImage src={user.avatar} alt={`${user.name}'s Avatar`} />
        {/if}
        <AvatarFallback>{getInitials(user?.name || 'User')}</AvatarFallback>
      </Avatar>
      
      <div class="text-center">
        <p class="text-lg font-medium">{user?.name || 'Unknown User'}</p>
        <p class="text-sm text-gray-500">{user?.email}</p>
        {#if user?.provider}
          <p class="text-xs mt-1 bg-gray-100 px-2 py-1 rounded-full inline-block">
            {user.provider === 'google' ? 'Google' : 'GitHub'}
          </p>
        {/if}
      </div>
      
      <Button variant="destructive" on:click={handleLogout}>
        Logout
      </Button>
    </CardContent>
  </Card>
</div>