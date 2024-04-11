import { logger, task, wait } from "@trigger.dev/sdk/v3";
import { createGraph } from "@repo/dsl";
import { bar } from "@repo/dsl/foo/bar";

export const helloWorldTask = task({
  id: "hello-world",
  run: async (payload: any, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });

    await wait.for({ seconds: 5 });

    // Create a new directed graph
    var g = createGraph();

    return bar();
  },
});
