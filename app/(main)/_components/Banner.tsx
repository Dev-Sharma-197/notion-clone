'use client';

import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { useRouter } from 'next/navigation';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { Id } from '@/convex/_generated/dataModel';
import { ConfrimModal } from '@/components/modals/ConfirmModal';

interface BannerProps {
  documentId: Id<'documents'>;
}

const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: 'Deleting note...',
      success: 'Note deleted!',
      error: 'Failed to delete note.'
    });
    router.push('/documents');
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: 'Restoring note...',
      success: 'Note Restored!',
      error: 'Failed to restore note.'
    });
  };

  return (
    <div className='w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center'>
      <p>This page is in the Trash.</p>
      <Button size='sm' variant='outline' onClick={onRestore} className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
        Restore page
      </Button>
      <ConfrimModal onConfirm={onRemove}>
        <Button size='sm' variant='outline' className='border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal'>
          Delete forever
        </Button>
      </ConfrimModal>
    </div>
  );
};

export default Banner;
