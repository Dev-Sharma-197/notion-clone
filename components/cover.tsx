'use client';

import Image from 'next/image';
import { useMutation } from 'convex/react';
import { ImageIcon, X } from 'lucide-react';
import { useParams } from 'next/navigation';

import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

import { cn } from '@/lib/utils';
import { api } from '@/convex/_generated/api';
import { useEdgeStore } from '@/lib/edgestore';
import useCoverImage from '@/hooks/useCoverImage';
import { Id } from '@/convex/_generated/dataModel';

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ url, preview }: CoverImageProps) => {
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const onRemove = () => {
    if (url) {
      edgestore.publicFiles.delete({
        url
      });
    }
    removeCoverImage({
      id: params.documentId as Id<'documents'>
    });
  };

  return (
    <div className={cn('relative w-full h-[35vh] group', !url && 'h-[12vh]', url && 'bg-muted')}>
      {!!url && <Image src={url} fill alt='Cover' className='object-cover mt-[52px]' />}
      {url && !preview && (
        <div className='opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2'>
          <Button onClick={() => coverImage.onReplace(url)} className='text-muted-foreground text-xs' variant='outline' size='sm'>
            <ImageIcon className='h-4 w-4 mr-2' />
            Change Cover
          </Button>
          <Button onClick={onRemove} className='text-muted-foreground text-xs' variant='outline' size='sm'>
            <X className='h-4 w-4 mr-2' />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className='w-full h-[35vh]' />;
};

export default Cover;
