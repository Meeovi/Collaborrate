import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AgreementsWhereInput {
    AND?: AgreementsWhereInput[] | undefined;
    OR?: AgreementsWhereInput[] | undefined;
    NOT?: AgreementsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    name?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    mediamanager?: StringNullableFilter | undefined;
    reference_id?: StringNullableFilter | undefined;
    shop_id?: StringNullableFilter | undefined;
    updated?: DateTimeNullableFilter | undefined;
    user_id?: StringNullableFilter | undefined;
}
