import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class StocksWhereInput {
    AND?: StocksWhereInput[] | undefined;
    OR?: StocksWhereInput[] | undefined;
    NOT?: StocksWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    enabled?: BoolNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    website?: StringNullableFilter | undefined;
    sources?: StringNullableFilter | undefined;
}
