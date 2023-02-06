import { NestedBigIntFilter } from "../inputs/NestedBigIntFilter";
import { NestedBigIntWithAggregatesFilter } from "../inputs/NestedBigIntWithAggregatesFilter";
import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class BigIntWithAggregatesFilter {
    equals?: bigint | undefined;
    in?: bigint[] | undefined;
    notIn?: bigint[] | undefined;
    lt?: bigint | undefined;
    lte?: bigint | undefined;
    gt?: bigint | undefined;
    gte?: bigint | undefined;
    not?: NestedBigIntWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _avg?: NestedFloatFilter | undefined;
    _sum?: NestedBigIntFilter | undefined;
    _min?: NestedBigIntFilter | undefined;
    _max?: NestedBigIntFilter | undefined;
}
