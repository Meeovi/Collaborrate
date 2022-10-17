import { Prisma } from "@prisma/client";
export declare class Reports {
    id: number;
    customer?: string | null;
    email?: string | null;
    products?: string | null;
    quantity?: Prisma.Decimal | null;
    subtotal?: string | null;
    applied_coupon?: string | null;
    created?: Date | null;
    updated?: Date | null;
    ip_address?: string | null;
}
