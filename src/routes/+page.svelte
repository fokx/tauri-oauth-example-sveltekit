<script lang="ts">
    import {goto} from '$app/navigation';
    import {Button, Card, Heading} from 'flowbite-svelte';
    import {login} from '$lib/services/auth';

    let isGoogleLoading = $state(false);
    let isGithubLoading = $state(false);
    let isDiscourseLoading = $state(false);
    let errorMessage = $state('');
    let isLoading = $derived(isGoogleLoading || isGithubLoading || isDiscourseLoading);

    async function loginWithGoogle() {
        try {
            errorMessage = '';
            isGoogleLoading = true;

            await login('google');

            goto('/home');
        } catch (error) {
            console.error('Google login failed:', error);
            errorMessage = 'Google login failed, please retry';
        } finally {
            isGoogleLoading = false;
        }
    }

    async function loginWithGithub() {
        try {
            errorMessage = '';
            isGithubLoading = true;

            await login('github');

            goto('/home');
        } catch (error) {
            console.error('GitHub login failed:', error);
            errorMessage = 'GitHub login failed, please retry';
        } finally {
            isGithubLoading = false;
        }
    }

    async function loginWithDiscourse() {
        try {
            errorMessage = '';
            isDiscourseLoading = true;

            await login('discourse');

            goto('/home');
        } catch (error) {
            console.error('Discourse login failed:', error);
            errorMessage = 'Discourse login failed, please retry';
        } finally {
            isDiscourseLoading = false;
        }
    }

</script>

<div class="flex items-center justify-center min-h-screen bg-background">
    <Card class="max-w-[vw] p-6 ms-0.5 me-0.5 dark:text-gray-200">
        <Heading class="text-2xl font-bold text-center">Login</Heading>
        <p class="text-center">
            Choose a way to login
        </p>
        <div class="grid gap-4">
            <Button disabled={isLoading} onclick={loginWithGoogle}>
                {#if !isGoogleLoading}
                    <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="16px">
                        <path fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                        <path fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                        <path fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                        <path fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l0.001-0.001l6.19,5.238C39.712,34.461,44,29.697,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                    </svg>
                {:else}
                    <span class="animate-spin mr-2">⟳</span>
                {/if}
                Google Login
            </Button>
            <Button disabled={isLoading} onclick={loginWithGithub}>
                {#if !isGithubLoading}
                    <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16"
                         height="16">
                        <path fill-rule="evenodd"
                              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                {:else}
                    <span class="animate-spin mr-2">⟳</span>
                {/if}
                GitHub Login
            </Button>
            <Button disabled={isLoading} onclick={loginWithDiscourse}>
                {#if !isDiscourseLoading}
                    <svg class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 104 106" width="16">
                        <path fill="#231f20"
                              d="M51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87S80 0 51.87 0Z"/>
                        <path fill="#fff9ae"
                              d="M52.37 19.74a31.62 31.62 0 0 0-27.79 46.67l-5.72 18.4 20.54-4.64a31.61 31.61 0 1 0 13-60.43Z"/>
                        <path fill="#00aeef"
                              d="M77.45 32.12a31.6 31.6 0 0 1-38.05 48l-20.54 4.7 20.91-2.47a31.6 31.6 0 0 0 37.68-50.23Z"/>
                        <path fill="#00a94f"
                              d="M71.63 26.29A31.6 31.6 0 0 1 38.8 78l-19.94 6.82 20.54-4.65a31.6 31.6 0 0 0 32.23-53.88Z"/>
                        <path fill="#f15d22"
                              d="M26.47 67.11a31.61 31.61 0 0 1 51-35 31.61 31.61 0 0 0-52.89 34.3l-5.72 18.4Z"/>
                        <path fill="#e31b23"
                              d="M24.58 66.41a31.61 31.61 0 0 1 47.05-40.12 31.61 31.61 0 0 0-49 39.63l-3.76 18.9Z"/>
                    </svg>
                {:else}
                    <span class="animate-spin mr-2">⟳</span>
                {/if}
                Discourse Login
            </Button>
            {#if errorMessage}
                <p class="text-red-500 text-center mt-2">{errorMessage}</p>
            {/if}
        </div>
    </Card>
</div>