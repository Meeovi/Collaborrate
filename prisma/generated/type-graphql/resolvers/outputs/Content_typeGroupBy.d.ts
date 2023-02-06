import { Prisma } from "@prisma/client";
import { Content_typeAvgAggregate } from "../outputs/Content_typeAvgAggregate";
import { Content_typeCountAggregate } from "../outputs/Content_typeCountAggregate";
import { Content_typeMaxAggregate } from "../outputs/Content_typeMaxAggregate";
import { Content_typeMinAggregate } from "../outputs/Content_typeMinAggregate";
import { Content_typeSumAggregate } from "../outputs/Content_typeSumAggregate";
export declare class Content_typeGroupBy {
    id: bigint;
    created_at: Date | null;
    text: string | null;
    number: Prisma.Decimal | null;
    json: Prisma.JsonValue | null;
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
    _count: Content_typeCountAggregate | null;
    _avg: Content_typeAvgAggregate | null;
    _sum: Content_typeSumAggregate | null;
    _min: Content_typeMinAggregate | null;
    _max: Content_typeMaxAggregate | null;
}
