import { Prisma } from "@prisma/client";
import { NestedDecimalFilter } from "../inputs/NestedDecimalFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedDecimalWithAggregatesFilter {
    equals?: Prisma.Decimal | undefined;
    in?: Prisma.Decimal[] | undefined;
    notIn?: Prisma.Decimal[] | undefined;
    lt?: Prisma.Decimal | undefined;
    lte?: Prisma.Decimal | undefined;
    gt?: Prisma.Decimal | undefined;
    gte?: Prisma.Decimal | undefined;
    not?: NestedDecimalWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _avg?: NestedDecimalFilter | undefined;
    _sum?: NestedDecimalFilter | undefined;
    _min?: NestedDecimalFilter | undefined;
    _max?: NestedDecimalFilter | undefined;
}
