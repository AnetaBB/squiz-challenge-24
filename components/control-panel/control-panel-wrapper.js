import { Filtering } from './filtering';
import { Sorting } from './sorting';
import { Accordion } from '@/components/ui/accordion';

export const ControlPanelWrapper = ({ handler }) => {
  return (
    <div className='min-w-[300px]'>
      <Accordion type='single' collapsible className='w-full bg-sky-200'>
        <Sorting handler={handler} />
        <Filtering handler={handler} />
      </Accordion>
    </div>
  );
};
