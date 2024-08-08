import React from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  type?: string;
  closeBtn: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ResponsiveDialog = ({
  children,
  isOpen,
  type,
  closeBtn,
  setIsOpen,
}: Props) => {
  const isTab = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  if (isDesktop && type === 'homepage') {
    return;
  }

  if (isTab) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {type === 'Add' && (
          <DialogTrigger asChild>
            <Button variant="outline" className="mb-3">
              Add menu
            </Button>
          </DialogTrigger>
        )}
        <DialogContent hideCloseButton={closeBtn}>{children}</DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialog;
