import { Prisma } from "@prisma/client";
export declare class ReportsCreateInput {
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
