import { NestedBigIntNullableFilter } from "../inputs/NestedBigIntNullableFilter";
export declare class BigIntNullableFilter {
    equals?: bigint | undefined;
    in?: bigint[] | undefined;
    notIn?: bigint[] | undefined;
    lt?: bigint | undefined;
    lte?: bigint | undefined;
    gt?: bigint | undefined;
    gte?: bigint | undefined;
    not?: NestedBigIntNullableFilter | undefined;
}
