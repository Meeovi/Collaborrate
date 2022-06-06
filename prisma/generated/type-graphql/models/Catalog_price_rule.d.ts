import { Prisma } from "@prisma/client";
export declare class Catalog_price_rule {
    id: number;
    rule?: string | null;
    description?: string | null;
    active?: boolean | null;
    customer_groups?: string | null;
    priority?: string | null;
    start_date?: Date | null;
    end_date?: Date | null;
    status?: string | null;
    website?: string | null;
    actions_apply?: string | null;
    actions_discount_amount?: Prisma.Decimal | null;
    actions_discard_subsequent_rules?: boolean | null;
}
