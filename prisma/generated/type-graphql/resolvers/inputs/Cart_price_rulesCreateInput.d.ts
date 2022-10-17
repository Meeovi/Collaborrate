import { Prisma } from "@prisma/client";
export declare class Cart_price_rulesCreateInput {
    rule?: string | undefined;
    description?: string | undefined;
    active?: boolean | undefined;
    coupon?: string | undefined;
    uses_per_customer?: string | undefined;
    priority?: string | undefined;
    start_date?: Date | undefined;
    end_date?: Date | undefined;
    status?: string | undefined;
    website?: string | undefined;
    actions_apply?: string | undefined;
    actions_discount_amount?: Prisma.Decimal | undefined;
    actions_discard_subsequent_rules?: boolean | undefined;
    actions_max_qty_discount_is_applied_to?: Prisma.Decimal | undefined;
    actions_discount_qty_step?: Prisma.Decimal | undefined;
    actions_apply_shipping_amount?: boolean | undefined;
}
