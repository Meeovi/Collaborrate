import { Prisma } from "@prisma/client";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedJsonNullableFilter } from "../inputs/NestedJsonNullableFilter";
export declare class JsonNullableWithAggregatesFilter {
    equals?: Prisma.InputJsonValue | undefined;
    path?: string[] | undefined;
    string_contains?: string | undefined;
    string_starts_with?: string | undefined;
    string_ends_with?: string | undefined;
    array_contains?: Prisma.InputJsonValue | undefined;
    array_starts_with?: Prisma.InputJsonValue | undefined;
    array_ends_with?: Prisma.InputJsonValue | undefined;
    lt?: Prisma.InputJsonValue | undefined;
    lte?: Prisma.InputJsonValue | undefined;
    gt?: Prisma.InputJsonValue | undefined;
    gte?: Prisma.InputJsonValue | undefined;
    not?: Prisma.InputJsonValue | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedJsonNullableFilter | undefined;
    _max?: NestedJsonNullableFilter | undefined;
}
