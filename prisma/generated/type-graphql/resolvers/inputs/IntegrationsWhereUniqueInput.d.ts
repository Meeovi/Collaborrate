import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntegrationsWhereInput } from "../inputs/IntegrationsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class IntegrationsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: IntegrationsWhereInput[] | undefined;
    OR?: IntegrationsWhereInput[] | undefined;
    NOT?: IntegrationsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    media?: StringNullableFilter | undefined;
    location?: StringNullableFilter | undefined;
    category?: StringNullableFilter | undefined;
}
