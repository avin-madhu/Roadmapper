import { Button } from "./shadcn-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn-ui/card";
import { Input } from "./shadcn-ui/input";
import { Label } from "./shadcn-ui/label";
import { Link } from "react-router-dom";

export default function ForgotPasswordForm() {
  return (
    <div className="my-10">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot Password?</CardTitle>
          <CardDescription>Enter your email below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Confirmation
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <Link to="/login">
              <Button variant="outline" className="w-full">
                Back
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
