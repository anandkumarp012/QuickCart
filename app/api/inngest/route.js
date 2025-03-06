import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
     // <-- This is where you'll always add all your functions
     syncUserCreation,
     syncUserUpdation,
     syncUserDeletion
  ],
});
