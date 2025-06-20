import {invoke} from '@tauri-apps/api/core';
import {load} from '@tauri-apps/plugin-store';


export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    provider: string;
    accessToken: string;
}


let currentUser: User | null = null;
let store: Awaited<ReturnType<typeof load>> | null = null;


async function getStore() {
    try {
        if (!store) {
            store = await load('user-store.json', {autoSave: true});
        }
        return store;
    } catch (error) {
        console.error('Failed to get store:', error);
        throw error;
    }

}


export async function login(provider: 'google' | 'github' | 'discourse'): Promise<User> {
    try {
        console.log('calling login_with_provider', currentUser);

        const userInfo = await invoke<{
            id: string;
            name: string;
            email: string;
            avatar: string | null;
            provider: string;
            access_token: string;
        }>('login_with_provider', {provider});
        console.log('called login_with_provider', currentUser);

        currentUser = {
            id: userInfo.id,
            name: userInfo.name,
            email: userInfo.email,
            avatar: userInfo.avatar || undefined,
            provider: userInfo.provider as 'google' | 'github' | 'discourse',
            accessToken: userInfo.access_token,
        };
        console.log('User logged in:', currentUser);

        // Store user in Tauri Store
        const store = await getStore();
        await store.set('user', currentUser);
        await store.save();
        console.log('User logged in:', currentUser);

        return currentUser;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}


export async function getCurrentUser(): Promise<User | null> {
    if (!currentUser) {
        try {
            const store = await getStore();
            currentUser = await store.get<User>('user') || null;
        } catch (error) {
            console.error('Failed to get stored user:', error);
        }
    }
    return currentUser;
}


export async function logout(): Promise<void> {
    currentUser = null;
    const store = await getStore();
    await store.delete('user');
    await store.save();
    console.log('User logged out');
}