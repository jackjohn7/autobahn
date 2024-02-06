"use client";

import { trpc } from "@/app/_trpc/client";

export default function HelloWorld() {
  const getMessage = trpc.hello.useQuery();

  return <p>{JSON.stringify(getMessage.data)}</p>
}
