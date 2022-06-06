import { Prisma } from "@prisma/client";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedJsonNullableFilter } from "../inputs/NestedJsonNullableFilter";
export declare class JsonNullableWithAggregatesFilter {
    equals?: Prisma.InputJsonValue | undefined;
    not?: Prisma.InputJsonValue | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedJsonNullableFilter | undefined;
    _max?: NestedJsonNullableFilter | undefined;
}
