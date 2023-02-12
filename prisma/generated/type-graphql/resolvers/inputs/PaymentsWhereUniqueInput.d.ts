import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { PaymentsWhereInput } from "../inputs/PaymentsWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PaymentsWhereUniqueInput {
    id?: bigint | undefined;
    name?: string | undefined;
    AND?: PaymentsWhereInput[] | undefined;
    OR?: PaymentsWhereInput[] | undefined;
    NOT?: PaymentsWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    client_id?: StringNullableFilter | undefined;
    client_secret?: StringNullableFilter | undefined;
    host_uri?: StringNullableFilter | undefined;
    redirect_url?: StringNullableFilter | undefined;
    redirect_url_app?: StringNullableFilter | undefined;
    icon?: StringNullableFilter | undefined;
    active?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
}
