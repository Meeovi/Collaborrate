import { Prisma } from "@prisma/client";
export declare class ReportsCreateManyInput {
    id?: number | undefined;
    customer?: string | undefined;
    email?: string | undefined;
    products?: string | undefined;
    quantity?: Prisma.Decimal | undefined;
    subtotal?: string | undefined;
    applied_coupon?: string | undefined;
    created?: Date | undefined;
    updated?: Date | undefined;
    ip_address?: string | undefined;
}
