import { Prisma } from "@prisma/client";
export declare class Cart_price_rulesMaxAggregate {
    id: number | null;
    rule: string | null;
    description: string | null;
    active: boolean | null;
    coupon: string | null;
    uses_per_customer: string | null;
    priority: string | null;
    start_date: Date | null;
    end_date: Date | null;
    status: string | null;
    website: string | null;
    actions_apply: string | null;
    actions_discount_amount: Prisma.Decimal | null;
    actions_discard_subsequent_rules: boolean | null;
    actions_max_qty_discount_is_applied_to: Prisma.Decimal | null;
    actions_discount_qty_step: Prisma.Decimal | null;
    actions_apply_shipping_amount: boolean | null;
}
