import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'August Gaukstad Portfolio',
        short_name: 'August Gaukstad',
        description: 'Portfolio site for August Gaukstad',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#666135',
        icons: [
            {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    }
}