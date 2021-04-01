import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <div
        style={{
          color: "white",
          background: "black",
          marginBottom: "1em"
        }}
      >
        Nav &nbsp;&nbsp;
        <Link href="/about">
          <a>About</a>
        </Link>
        &nbsp;&nbsp;
        <Link href="/hello">
          <a>Hello</a>
        </Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
