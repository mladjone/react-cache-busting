import withCacheBusting, { BundleVersion } from "./CacheBuster";

function App() {
  return (
    <div>
      <h1>Cache Busting - Example</h1>
      <BundleVersion/>
    </div>
  );
}

export default withCacheBusting(App);
