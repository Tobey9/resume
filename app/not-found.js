import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we can&rsquo;t find the page you&rsquo;re looking for.</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </div>
  );
}
