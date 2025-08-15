import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function DistProxy() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string[] }; // টাইপ ডিফাইন

  useEffect(() => {
    // যদি slug না থাকে তাহলে index.html দেখান
    const path = slug ? slug.join('/') : 'index.html';
    const fullPath = `/dist/${path.endsWith('.html') ? path : path + '.html'}`;

    // Static file এ redirect করুন
    window.location.href = fullPath;
  }, [slug]);

  return "Loading";
}
