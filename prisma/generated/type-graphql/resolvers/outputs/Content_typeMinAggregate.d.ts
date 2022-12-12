import { Prisma } from "@prisma/client";
export declare class Content_typeMinAggregate {
    id: bigint | null;
    created_at: Date | null;
    text: string | null;
    number: Prisma.Decimal | null;
    link: string | null;
    email: string | null;
    uid: string | null;
    date: Date | null;
    time: Date | null;
    timestamp: Date | null;
    boolean: boolean | null;
    rich_text: string | null;
    password: string | null;
    media: string | null;
    database_name: string | null;
}
