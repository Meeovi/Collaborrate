import { NestedBigIntNullableFilter } from "../inputs/NestedBigIntNullableFilter";
import { NestedBigIntNullableWithAggregatesFilter } from "../inputs/NestedBigIntNullableWithAggregatesFilter";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class BigIntNullableWithAggregatesFilter {
    equals?: bigint | undefined;
    in?: bigint[] | undefined;
    notIn?: bigint[] | undefined;
    lt?: bigint | undefined;
    lte?: bigint | undefined;
    gt?: bigint | undefined;
    gte?: bigint | undefined;
    not?: NestedBigIntNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _avg?: NestedFloatNullableFilter | undefined;
    _sum?: NestedBigIntNullableFilter | undefined;
    _min?: NestedBigIntNullableFilter | undefined;
    _max?: NestedBigIntNullableFilter | undefined;
}
