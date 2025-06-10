// Live preview configuration for Sanity Studio
import { draftMode } from "next/headers";
import { client } from "./client";

// The live preview client
export const preview = {
  token: process.env.SANITY_API_READ_TOKEN,

  fetch: async (query: string) => {
    if (draftMode().isEnabled) {
      return client
        .withConfig({
          useCdn: false,
          token: process.env.SANITY_API_READ_TOKEN,
          perspective: "previewDrafts",
        })
        .fetch(query);
    }

    return client.fetch(query);
  },
};
