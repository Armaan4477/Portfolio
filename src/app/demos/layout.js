import { Suspense } from 'react';

export const metadata = {
  title: "Armaan's Project Demos",
  description: 'Download and explore demos of my projects',
}

export default function DemosLayout({ children }) {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    }>
      {children}
    </Suspense>
  );
}
