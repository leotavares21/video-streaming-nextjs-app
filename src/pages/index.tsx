export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-medium mb-4">Video Streaming</h1>

      <nav className="flex">
        <a
          href="#"
          className="flex items-center gap-2 text-xl text-secondary py-2 pr-4 hover:brightness-90"
        >
          <div className="w-2 h-2 rounded-full bg-secondary"></div>
          <span>Trending</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-xl text-gray py-2 pr-4 hover:brightness-90"
        >
          <span>Subscriptions</span>
        </a>
      </nav>
    </div>
  );
}
