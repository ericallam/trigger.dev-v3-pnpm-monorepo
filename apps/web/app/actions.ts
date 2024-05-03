"use server";

import { createGraphTask } from "@repo/trigger/example";

export async function triggerHelloWorldTask() {
  try {
    const handle = await createGraphTask.trigger({
      numberOfGraphs: 3,
    });

    return { handle };
  } catch (error) {
    console.error(error);
    return {
      error: "something went wrong",
    };
  }
}
