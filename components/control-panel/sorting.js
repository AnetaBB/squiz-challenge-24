'use client';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useTableData } from '@/hooks/useTableData';
import { useEffect } from 'react';

export const Sorting = ({ handler }) => {
  const { changeNameOrder, changeEmployeesOrder, nameOrder, employeesOrder } =
    handler;

  const handleSelectValueChange = (type, value) => {
    switch (type) {
      case 'name-order':
        changeNameOrder(value);
        break;

      case 'employees-order':
        changeEmployeesOrder(value);
        break;

      default:
        break;
    }
  };

  return (
    <AccordionItem value='item-1' className='text-center'>
      <AccordionTrigger>Sorting</AccordionTrigger>
      <AccordionContent>
        <Card>
          <CardHeader>
            <CardTitle>by numberOfEmployees</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='employees-order'>Order</Label>
                  <Select
                    value={employeesOrder}
                    onValueChange={(value) =>
                      handleSelectValueChange('employees-order', value)
                    }
                  >
                    <SelectTrigger id='employees-order'>
                      <SelectValue placeholder='Select...' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='employees-ascending'>
                        Ascending
                      </SelectItem>
                      <SelectItem value='employees-descending'>
                        Descending
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>by name</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name-order'>Order</Label>
                  <Select
                    value={nameOrder}
                    onValueChange={(value) =>
                      handleSelectValueChange('name-order', value)
                    }
                  >
                    <SelectTrigger id='name-order'>
                      <SelectValue placeholder='Select...' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='name-ascending'>Ascending</SelectItem>
                      <SelectItem value='name-descending'>
                        Descending
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};
