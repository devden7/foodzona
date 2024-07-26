import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  type?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResponsiveDialog = ({ children, isOpen, type, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {type === 'Add' && (
        <DialogTrigger asChild>
          <Button variant="outline" className="mb-3">
            Add menu
          </Button>
        </DialogTrigger>
      )}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ResponsiveDialog;
