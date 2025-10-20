import { ArrowLeft } from "lucide-react";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-violet-300 mb-6">
            <ArrowLeft className="w-4 h-4" />
            <div className="h-4 bg-violet-500/20 rounded animate-pulse w-24"></div>
          </div>

          <div className="h-12 sm:h-16 lg:h-20 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded animate-pulse mb-6"></div>
          <div className="h-6 bg-zinc-700/50 rounded animate-pulse max-w-3xl"></div>
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-card/30 border border-violet-500/20 rounded-lg overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-violet-900/30 to-purple-900/30 animate-pulse"></div>

              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-5 bg-violet-500/20 rounded animate-pulse w-16"></div>
                  <div className="h-5 bg-yellow-500/20 rounded animate-pulse w-20"></div>
                </div>

                <div className="h-6 bg-zinc-700/50 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-zinc-700/30 rounded animate-pulse mb-3 w-4/5"></div>

                <div className="flex flex-wrap gap-1">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <div
                      key={j}
                      className="h-5 bg-violet-500/20 rounded animate-pulse w-16"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section Skeleton */}
        <div className="text-center mt-16">
          <div className="h-8 bg-zinc-700/50 rounded animate-pulse mb-4 max-w-md mx-auto"></div>
          <div className="h-5 bg-zinc-700/30 rounded animate-pulse mb-6 max-w-2xl mx-auto"></div>
          <div className="h-10 bg-violet-600/30 rounded animate-pulse w-32 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
