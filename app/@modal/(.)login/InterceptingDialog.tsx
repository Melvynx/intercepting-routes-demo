"use client";

import { Dialog } from "@/components/ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export type InterceptingDialogProps = DialogProps;

export const InterceptingDialog = (props: InterceptingDialogProps) => {
  const router = useRouter();
  return (
    <Dialog onOpenChange={() => router.back()} open={true} {...props}></Dialog>
  );
};
