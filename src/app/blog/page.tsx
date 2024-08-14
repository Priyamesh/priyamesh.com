import React from "react";


export default function Page() {
  return <EmptyState />;
}

function EmptyState() {
  return (
    <>
      <h2 className="text-3xl text-center">no blog posts yet</h2>
    </>
  );
};
