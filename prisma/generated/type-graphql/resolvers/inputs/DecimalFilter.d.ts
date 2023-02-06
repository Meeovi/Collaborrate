import { Prisma } from "@prisma/client";
import { NestedDecimalFilter } from "../inputs/NestedDecimalFilter";
export declare class DecimalFilter {
    equals?: Prisma.Decimal | undefined;
    in?: Prisma.Decimal[] | undefined;
    notIn?: Prisma.Decimal[] | undefined;
    lt?: Prisma.Decimal | undefined;
    lte?: Prisma.Decimal | undefined;
    gt?: Prisma.Decimal | undefined;
    gte?: Prisma.Decimal | undefined;
    not?: NestedDecimalFilter | undefined;
}
