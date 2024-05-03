import { logger, task, wait } from "@trigger.dev/sdk/v3";
import { createGraph } from "@repo/dsl";

export const createGraphTask = task({
  id: "create-graph",
  run: async (payload: { numberOfGraphs: number }, { ctx }) => {
    logger.log("Creating some great graphs!", { payload, ctx });

    await wait.for({ seconds: 5 });

    const graphs: Array<ReturnType<typeof createGraph>> = [];

    for (let i = 0; i < payload.numberOfGraphs; i++) {
      graphs.push(createGraph());
    }

    return { graphs };
  },
});
