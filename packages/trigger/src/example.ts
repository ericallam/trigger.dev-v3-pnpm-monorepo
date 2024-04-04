import { logger, task, wait } from "@trigger.dev/sdk/v3";
import { createGraph, callAssertNever } from "@repo/dsl";

export const helloWorldTask = task({
  id: "hello-world",
  run: async (payload: any, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    // Create a new directed graph
    var g = createGraph();

    callAssertNever();
  },
});
