import { Prisma } from "@prisma/client";
export declare class Content_typeCreateInput {
    id?: bigint | undefined;
    created_at?: Date | undefined;
    text?: string | undefined;
    number?: Prisma.Decimal | undefined;
    json?: Prisma.InputJsonValue | undefined;
    link?: string | undefined;
    email?: string | undefined;
    uid?: string | undefined;
    date?: Date | undefined;
    time?: Date | undefined;
    timestamp?: Date | undefined;
    boolean?: boolean | undefined;
    rich_text?: string | undefined;
    password?: string | undefined;
    media?: string | undefined;
    database_name?: string | undefined;
}
