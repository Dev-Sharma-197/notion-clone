'use client';

import { useTheme } from 'next-themes';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { useEdgeStore } from '@/lib/edgestore';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const uploadFile = async (file: File) => {
    const response = await edgestore.publicFiles.upload({ file });

    return response.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
    uploadFile
  });

  const handleOnChange = () => {
    if (!editable) return;
    onChange(JSON.stringify(editor.document, null, 2));
    return;
  };

  return (
    <div>
      <BlockNoteView editable={editable} editor={editor} onChange={handleOnChange} theme={resolvedTheme === 'dark' ? 'dark' : 'light'} />
    </div>
  );
};

export default Editor;
