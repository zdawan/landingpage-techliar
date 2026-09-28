import { Suspense } from "react";
import ProjectDetail from "../../../pages/ProjectDetail";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090B10]" />}>
      <ProjectDetail />
    </Suspense>
  );
}
