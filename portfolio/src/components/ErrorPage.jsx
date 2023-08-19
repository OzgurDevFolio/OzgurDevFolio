import { React, useEffect } from 'react'

export default function ErrorPage() {
    useEffect(() => {
        document.title = 'Page Not Found'
    }, [])

    return <div>ErrorPage</div>
}
