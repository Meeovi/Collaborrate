import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { WebhooksWhereInput } from "../inputs/WebhooksWhereInput";
export declare class WebhooksWhereUniqueInput {
    id?: bigint | undefined;
    AND?: WebhooksWhereInput[] | undefined;
    OR?: WebhooksWhereInput[] | undefined;
    NOT?: WebhooksWhereInput[] | undefined;
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
