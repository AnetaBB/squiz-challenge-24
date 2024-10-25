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

export const Filtering = ({ handler }) => {
  const {
    countries,
    industries,
    changeCountryFilter,
    changeIndustryFilter,
    countryFilter,
    industryFilter,
  } = handler;

  const handleSelectValueChange = (type, value) => {
    switch (type) {
      case 'industry-filter':
        changeIndustryFilter(value);
        break;

      case 'country-filter':
        changeCountryFilter(value);
        break;

      default:
        break;
    }
  };

  if (!countries || !industries) {
    return <div>Loading...</div>;
  }

  return (
    <AccordionItem value='item-2' className='text-center'>
      <AccordionTrigger>Filtering</AccordionTrigger>
      <AccordionContent>
        <Card>
          <CardHeader>
            <CardTitle>By country</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='country-filter'>Filter</Label>
                  <Select
                    value={countryFilter}
                    onValueChange={(value) =>
                      handleSelectValueChange('country-filter', value)
                    }
                  >
                    <SelectTrigger id='country-filter'>
                      <SelectValue placeholder='Select...' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      {countries.map((country) => (
                        <SelectItem key={`key-${country}`} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>By industry</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='industry-filter'>Filter</Label>
                  <Select
                    value={industryFilter}
                    onValueChange={(value) =>
                      handleSelectValueChange('industry-filter', value)
                    }
                  >
                    <SelectTrigger id='industry-filter'>
                      <SelectValue placeholder='Select...' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      {industries.map((industry) => (
                        <SelectItem key={`key-${industry}`} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
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
