import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProvidersWhereInput } from "../inputs/ProvidersWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProvidersWhereUniqueInput {
    id?: bigint | undefined;
    name?: string | undefined;
    AND?: ProvidersWhereInput[] | undefined;
    OR?: ProvidersWhereInput[] | undefined;
    NOT?: ProvidersWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    host_uri?: StringNullableFilter | undefined;
    redirect_url?: StringNullableFilter | undefined;
    redirect_url_app?: StringNullableFilter | undefined;
    icon?: StringNullableFilter | undefined;
    active?: StringNullableFilter | undefined;
}
