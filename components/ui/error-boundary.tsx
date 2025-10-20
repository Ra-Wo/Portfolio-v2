"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <div className="text-6xl mb-6">⚠️</div>
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">
              Something went wrong
            </h2>
            <p className="text-zinc-300 mb-6">
              We{"'"}re sorry, but something unexpected happened. Please try
              refreshing the page.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-violet-600 hover:bg-violet-700 text-white"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
