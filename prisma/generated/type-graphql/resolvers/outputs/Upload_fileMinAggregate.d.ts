import { Prisma } from "@prisma/client";
export declare class Upload_fileMinAggregate {
    id: number | null;
    name: string | null;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    hash: string | null;
    ext: string | null;
    mime: string | null;
    size: Prisma.Decimal | null;
    url: string | null;
    previewUrl: string | null;
    provider: string | null;
    created_by: number | null;
    updated_by: number | null;
    created_at: Date | null;
    updated_at: Date | null;
}
