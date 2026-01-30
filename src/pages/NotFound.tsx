import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Page Not Found
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-semibold text-foreground mb-6">
            404
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
