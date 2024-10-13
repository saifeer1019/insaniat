// app/[slug]/page.js or app/[slug]/page.tsx
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();
  let [slug_, setSlug_] = useState("skejb")
  const { slug } = router.query; 
  useEffect(()=>{
    setSlug(slug)
  },[slug])
  // Assuming the slug is part of the URL

  return (
    <div>
      <h1>Slug: {slug_}</h1>
      {/* Your component logic here */}
    </div>
  );
};

export default Page;
