'use server';

import { cookies } from 'next/headers';

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    (await cookies()).set('session_user_id', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });

    (await cookies()).set('session_access_token', accessToken, { // Corregido userId por accessToken
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60,
        path: '/'
    });

    (await cookies()).set('session_refresh_token', refreshToken, { // Agregada la cookie para refreshToken
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    });
}

export async function resetAuthCookies() {
    (await cookies()).set('session_user_id','');
    (await cookies()).set('session_access_token','');
    (await cookies()).set('session_refresh_token','');
}


export async function getUserId() {
    const userId = (await cookies()).get('session_user_id')?.value;
    return userId ? userId : null;
}
    