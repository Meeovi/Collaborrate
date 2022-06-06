import { Prisma } from "@prisma/client";
export declare class Reward_pointsCreateManyInput {
    id?: number | undefined;
    name: string;
    excerpt?: string | undefined;
    discount?: Prisma.Decimal | undefined;
    image?: string | undefined;
    published?: Date | undefined;
    coupons?: string | undefined;
    expiration?: Date | undefined;
    categories?: string | undefined;
    articles?: string | undefined;
    products?: string | undefined;
    customers?: string | undefined;
    users?: string | undefined;
}
