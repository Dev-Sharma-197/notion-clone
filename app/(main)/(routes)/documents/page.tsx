'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { PlusCircle } from 'lucide-react';
import { useMutation } from 'convex/react';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: 'Untitled' }).then(documentId => router.push(`/documents/${documentId}`));

    toast.promise(promise, {
      loading: 'Creating a new note...',
      success: 'New note Created!',
      error: 'Failed to create new note!'
    });
  };

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image src='/empty.png' height='300' width='300' alt='Emty' className='dark:hidden' />
      <Image src='/empty.png' height='300' width='300' alt='Emty' className='hidden dark:block' />
      <h2 className='text-lg font-medium'>Welcome to {user?.firstName}&apos;s Jotion</h2>
      <Button onClick={onCreate}>
        <PlusCircle className='h-4 w-4 mr-2' />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
