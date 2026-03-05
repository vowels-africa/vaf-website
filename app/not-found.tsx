import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h1>404 &mdash; Page Not Found</h1>
      <p style={{ marginTop: "1rem" }}>
        <Link href="/">Back to home</Link>
      </p>
    </div>
  );
}
