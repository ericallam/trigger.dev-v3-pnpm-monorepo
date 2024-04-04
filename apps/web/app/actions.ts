"use server";

import { helloWorldTask } from "../trigger/example";

export async function triggerHelloWorldTask() {
  try {
    const handle = await helloWorldTask.trigger({
      payload: {
        foo: "bar",
      },
    });

    return { handle };
  } catch (error) {
    console.error(error);
    return {
      error: "something went wrong",
    };
  }
}
