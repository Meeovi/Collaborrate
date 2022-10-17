import { Prisma } from "@prisma/client";
export declare class Catalog_price_ruleCreateManyInput {
    id?: number | undefined;
    rule?: string | undefined;
    description?: string | undefined;
    active?: boolean | undefined;
    customer_groups?: string | undefined;
    priority?: string | undefined;
    start_date?: Date | undefined;
    end_date?: Date | undefined;
    status?: string | undefined;
    website?: string | undefined;
    actions_apply?: string | undefined;
    actions_discount_amount?: Prisma.Decimal | undefined;
    actions_discard_subsequent_rules?: boolean | undefined;
}
