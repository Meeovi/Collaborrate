import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class IntegrationsWhereInput {
    AND?: IntegrationsWhereInput[] | undefined;
    OR?: IntegrationsWhereInput[] | undefined;
    NOT?: IntegrationsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
}
