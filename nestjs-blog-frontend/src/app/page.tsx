import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Nest.js Blog</h1>
      <div className="mt-20">
        <ul>
          <li>
            <h2>初めての投稿</h2>
            <p>By ARATA</p>
          </li>
        </ul>
      </div>
    </main>
  )
}
