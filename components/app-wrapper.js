'use client';

import { ControlPanelWrapper } from '@/components/control-panel/control-panel-wrapper';
import { ListOfItemsWrapper } from '@/components/ListOfItemsWrapper';
import { useTableData } from '@/hooks/useTableData';
import { useEffect, useMemo } from 'react';

export const AppWrapper = ({ data }) => {
  const tableDataHandler = useTableData(data);
  const { tableData } = tableDataHandler;

  return (
    <div className='flex flex-col md:flex-row padding-top: 50px'>
      <ControlPanelWrapper handler={tableDataHandler} />
      <ListOfItemsWrapper data={tableData} />
    </div>
  );
};
