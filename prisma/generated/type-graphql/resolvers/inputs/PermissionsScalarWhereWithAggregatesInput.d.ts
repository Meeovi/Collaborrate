import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class PermissionsScalarWhereWithAggregatesInput {
    AND?: PermissionsScalarWhereWithAggregatesInput[] | undefined;
    OR?: PermissionsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PermissionsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    create?: StringNullableWithAggregatesFilter | undefined;
    delete?: StringNullableWithAggregatesFilter | undefined;
    read?: StringNullableWithAggregatesFilter | undefined;
    role?: StringNullableWithAggregatesFilter | undefined;
    update?: StringNullableWithAggregatesFilter | undefined;
    users?: StringNullableWithAggregatesFilter | undefined;
}
