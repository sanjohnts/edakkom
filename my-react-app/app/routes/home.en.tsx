import type { Route } from "./+types/home.en";
import { HomePage } from "~/components/HomePage";
import { homeMeta } from "~/lib/seo";

export const meta: Route.MetaFunction = () => homeMeta("en");

export default function HomeEnglish() {
  return <HomePage lang="en" />;
}
