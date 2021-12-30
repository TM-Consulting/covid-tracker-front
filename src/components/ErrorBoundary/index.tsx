import * as React from "react";

export interface BoundaryProps {
  children: React.ReactNode;
  className?: string;
}

export interface BoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<BoundaryProps, BoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): BoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: any) {}

  public componentWillUnmount() {
    this.setState({ hasError: false, error: null });
  }

  public render() {
    const { error } = this.state;

    if (this.state.hasError) {
      return (
        <div className={this.props.className}>
          <p>We encountered an unexpected error.</p>
          {error && error.hasOwnProperty("message") && <p>{error.message}</p>}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
