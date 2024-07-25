'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import FormFood from './FormFood';
import FoodList from './FoodList';

interface Props {
  token: string;
}
const TabsMenu = ({ token }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div>
          <DialogTrigger asChild>
            <Button variant="outline" className="mb-3">
              Add menu
            </Button>
          </DialogTrigger>
        </div>

        <DialogContent className="flex w-3/4 flex-col items-start px-8">
          <DialogTitle>Menu</DialogTitle>
          <FormFood type="Add food" setIsOpen={setIsOpen} token={token} />
        </DialogContent>
      </Dialog>
      <FoodList isOpen={isOpen} setIsOpen={setIsOpen} token={token} />
    </>
  );
};

export default TabsMenu;
