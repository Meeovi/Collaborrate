import { Prisma } from "@prisma/client";
export declare class Upload_fileCreateManyInput {
    id?: number | undefined;
    name: string;
    alternativeText?: string | undefined;
    caption?: string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    formats?: Prisma.InputJsonValue | undefined;
    hash: string;
    ext?: string | undefined;
    mime: string;
    size: Prisma.Decimal;
    url: string;
    previewUrl?: string | undefined;
    provider: string;
    provider_metadata?: Prisma.InputJsonValue | undefined;
    created_by?: number | undefined;
    updated_by?: number | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
}
