'use client';

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { useParams } from 'next/navigation';

import { api } from '@/convex/_generated/api';
import { useEdgeStore } from '@/lib/edgestore';
import useCoverImage from '@/hooks/useCoverImage';
import { Id } from '@/convex/_generated/dataModel';

import { SingleImageDropzone } from '../single-image-dropzone';
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog';
import { toast } from 'sonner';

const CoverImageModal = () => {
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const update = useMutation(api.documents.update);

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      try {
        setIsSubmitting(true);
        setFile(file);

        const res = await edgestore.publicFiles.upload({
          file,
          options: {
            replaceTargetUrl: coverImage.url
          }
        });

        await update({
          id: params.documentId as Id<'documents'>,
          coverImage: res.url
        });

        onClose();
      } catch (error) {
        toast.error('Error while uploading image');
        console.info(error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className='text-center text-lg font-semibold'>Cover Image</h2>
        </DialogHeader>
        <SingleImageDropzone
          dropzoneOptions={{
            maxFiles: 1024,
            onError: er => console.log('-------', er)
          }}
          className='w-full outline-none'
          disabled={isSubmitting}
          value={file}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
