import { LoginForm } from "@/components/login-form";
import { DialogContent } from "@/components/ui/dialog";
import { InterceptingDialog } from "./InterceptingDialog";

export default async function RoutePage() {
  return (
    <InterceptingDialog>
      <DialogContent>
        <LoginForm />
      </DialogContent>
    </InterceptingDialog>
  );
}
