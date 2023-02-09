import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";
import { NestedBoolNullableWithAggregatesFilter } from "../inputs/NestedBoolNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class BoolNullableWithAggregatesFilter {
    equals?: boolean | undefined;
    not?: NestedBoolNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedBoolNullableFilter | undefined;
    _max?: NestedBoolNullableFilter | undefined;
}
