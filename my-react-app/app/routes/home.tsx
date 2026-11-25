import type { Route } from "./+types/home";
import { HomePage } from "~/components/HomePage";
import { homeMeta } from "~/lib/seo";

export const meta: Route.MetaFunction = () => homeMeta("ml");

export default function Home() {
  return <HomePage lang="ml" />;
}
