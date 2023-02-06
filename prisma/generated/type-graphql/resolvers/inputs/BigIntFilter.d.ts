import { NestedBigIntFilter } from "../inputs/NestedBigIntFilter";
export declare class BigIntFilter {
    equals?: bigint | undefined;
    in?: bigint[] | undefined;
    notIn?: bigint[] | undefined;
    lt?: bigint | undefined;
    lte?: bigint | undefined;
    gt?: bigint | undefined;
    gte?: bigint | undefined;
    not?: NestedBigIntFilter | undefined;
}
