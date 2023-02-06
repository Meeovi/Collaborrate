import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class WebhooksWhereInput {
    AND?: WebhooksWhereInput[] | undefined;
    OR?: WebhooksWhereInput[] | undefined;
    NOT?: WebhooksWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    name?: StringFilter | undefined;
    url?: StringFilter | undefined;
    headers?: StringNullableFilter | undefined;
    create?: StringNullableFilter | undefined;
    retrieve?: StringNullableFilter | undefined;
    update?: StringNullableFilter | undefined;
    delete?: StringNullableFilter | undefined;
    publish?: StringNullableFilter | undefined;
    unpublish?: StringNullableFilter | undefined;
}
