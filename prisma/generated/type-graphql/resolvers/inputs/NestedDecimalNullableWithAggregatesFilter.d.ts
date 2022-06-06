import { Prisma } from "@prisma/client";
import { NestedDecimalNullableFilter } from "../inputs/NestedDecimalNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedDecimalNullableWithAggregatesFilter {
    equals?: Prisma.Decimal | undefined;
    in?: Prisma.Decimal[] | undefined;
    notIn?: Prisma.Decimal[] | undefined;
    lt?: Prisma.Decimal | undefined;
    lte?: Prisma.Decimal | undefined;
    gt?: Prisma.Decimal | undefined;
    gte?: Prisma.Decimal | undefined;
    not?: NestedDecimalNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _avg?: NestedDecimalNullableFilter | undefined;
    _sum?: NestedDecimalNullableFilter | undefined;
    _min?: NestedDecimalNullableFilter | undefined;
    _max?: NestedDecimalNullableFilter | undefined;
}
