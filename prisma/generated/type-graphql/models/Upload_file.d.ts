import { Prisma } from "@prisma/client";
export declare class Upload_file {
    id: number;
    name: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: Prisma.JsonValue | null;
    hash: string;
    ext?: string | null;
    mime: string;
    size: Prisma.Decimal;
    url: string;
    previewUrl?: string | null;
    provider: string;
    provider_metadata?: Prisma.JsonValue | null;
    created_by?: number | null;
    updated_by?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
}
