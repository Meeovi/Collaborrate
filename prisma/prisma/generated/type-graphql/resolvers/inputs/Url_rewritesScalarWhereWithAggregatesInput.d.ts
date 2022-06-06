import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class Url_rewritesScalarWhereWithAggregatesInput {
    AND?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Url_rewritesScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    request_path?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    redirect_type?: BoolNullableWithAggregatesFilter | undefined;
    target_path?: StringNullableWithAggregatesFilter | undefined;
    store?: StringNullableWithAggregatesFilter | undefined;
}
