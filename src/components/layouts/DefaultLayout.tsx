import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mt-20 px-12">{children}</main>
    </>
  );
}
