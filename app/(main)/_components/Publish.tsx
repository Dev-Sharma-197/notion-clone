'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import useOrigin from '@/hooks/useOrigin';
import { useMutation } from 'convex/react';
import { Check, Copy, Globe } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface PublishProps {
  initialData: Doc<'documents'>;
}

const Publish = ({ initialData }: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitted(true);

    const promise = update({
      id: initialData._id,
      isPublished: true
    }).finally(() => setIsSubmitted(false));

    toast.promise(promise, {
      loading: 'Publishing...',
      success: 'Note published',
      error: 'Failed to publish note.'
    });
  };

  const onUnpublish = () => {
    setIsSubmitted(true);

    const promise = update({
      id: initialData._id,
      isPublished: false
    }).finally(() => setIsSubmitted(false));

    toast.promise(promise, {
      loading: 'Unpublishing...',
      success: 'Note unpublished',
      error: 'Failed to unpublish note.'
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='sm' variant='ghost'>
          {initialData.isPublished ? (
            <>
              Published
              <Globe className='text-green-700 animate-pulse w-4 h-4 ml-2' />
            </>
          ) : (
            'Publish'
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-72' align='end' alignOffset={8} forceMount>
        {initialData.isPublished ? (
          <div className='space-y-4'>
            <div className='flex items-center gap-x-2'>
              <Globe className='text-green-700 animate-pulse w-4 h-4' />
              <p className='text-xs font-medium text-green-700'>This note is live on web.</p>
            </div>
            <div className='flex items-center'>
              <input value={url} disabled className='flex-1 px-2 text-xs border rounded-l-md h-8 bg-muted truncate' />
              <Button onClick={onCopy} disabled={copied} className='h-8 rounded-l-none disabled:opacity-100'>
                {copied ? <Check className='h-4 w-4 text-green-500' /> : <Copy className='h-4 w-4' />}
              </Button>
            </div>
            <Button size='sm' className='w-full text-xs' disabled={isSubmitted} onClick={onUnpublish}>
              Unpublish
            </Button>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center'>
            <Globe className='h-8 w-8 text-muted-foreground mb-2' />
            <p className='text-sm font-medium mb-2'>Publish this note</p>
            <span className='text-xs text-muted-foreground mb-4'>Share your work with others.</span>
            <Button disabled={isSubmitted} onClick={onPublish} className='w-full' size='sm'>
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Publish;
