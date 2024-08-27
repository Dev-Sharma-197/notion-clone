"use client";

import { useState } from "react";
import { FileIcon } from "lucide-react";
import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";

import Item from "./Item";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";

interface DocumentListProps {
    parentDocumentId?: Id<"documents">
    level?: number;
    data?: Doc<"documents">[];
}

const DocumentList = ({
    parentDocumentId,
    level = 0,
}: DocumentListProps) => {
    const params = useParams();
    const router = useRouter();
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const onExpand = (documentId: string) => {
        setExpanded(preExpanded => ({
            ...preExpanded,
            [documentId]: !preExpanded[documentId]
        }));
    };

    const documents = useQuery(api.documents.getSidebar, {
        parentDocument: parentDocumentId
    });

    const onRedirect = (documentId: string) => {
        router.push(`/documents/${documentId}`);
    }

    if (documents === undefined) {
        return (
            <>
                <Item.Skeleton level={level} />
                {level === 0 && (
                    <>
                        <Item.Skeleton level={level} />
                        <Item.Skeleton level={level} />
                    </>
                )}
            </>
        )
    };

    return (
        <>
            <p
                style={{ paddingLeft: level ? `${(level * 12) + 12}px` : '' }}
                className={cn(
                    "hidden text-sm font-medium text-muted-foreground/80",
                    expanded && "last:block",
                    level === 0 && "hidden"
                )}
            >
                No pages inside
            </p>
            {documents?.map((document: any) => (
                <div key={document._id} className="">
                    <Item
                        level={level}
                        icon={FileIcon}
                        id={document._id}
                        label={document.title}
                        documentIcon={document.icon}
                        expanded={expanded[document._id]}
                        onExpand={() => onExpand(document._id)}
                        onClick={() => onRedirect(document._id)}
                        active={params.documentId === document._id}
                    />
                    {expanded[document._id] && (
                        <DocumentList
                            parentDocumentId={document._id}
                            level={level + 1}
                        />
                    )}
                </div>
            ))}
        </>
    );
}

export default DocumentList;