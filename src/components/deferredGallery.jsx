import { lazy, Suspense, useEffect, useRef, useState } from "react";

const Gallery = lazy(() => import("../pages/gallery"));

export default function DeferredGallery() {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="gallery" ref={sectionRef} className="min-h-[430px]">
      {shouldLoad && (
        <Suspense fallback={<div className="min-h-[430px]" aria-label="Loading gallery" />}>
          <Gallery />
        </Suspense>
      )}
    </div>
  );
}
