import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProvidersWhereInput {
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    host_uri?: StringNullableFilter | undefined;
    redirect_url?: StringNullableFilter | undefined;
    redirect_url_app?: StringNullableFilter | undefined;
    icon?: StringNullableFilter | undefined;
    name?: StringFilter | undefined;
    active?: StringNullableFilter | undefined;
}
