import { Prisma } from "@prisma/client";
import { NestedDecimalNullableFilter } from "../inputs/NestedDecimalNullableFilter";
export declare class DecimalNullableFilter {
    equals?: Prisma.Decimal | undefined;
    in?: Prisma.Decimal[] | undefined;
    notIn?: Prisma.Decimal[] | undefined;
    lt?: Prisma.Decimal | undefined;
    lte?: Prisma.Decimal | undefined;
    gt?: Prisma.Decimal | undefined;
    gte?: Prisma.Decimal | undefined;
    not?: NestedDecimalNullableFilter | undefined;
}
