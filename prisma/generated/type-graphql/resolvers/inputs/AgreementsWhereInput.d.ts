import { BigIntFilter } from "../inputs/BigIntFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AgreementsWhereInput {
    AND?: AgreementsWhereInput[] | undefined;
    OR?: AgreementsWhereInput[] | undefined;
    NOT?: AgreementsWhereInput[] | undefined;
    id?: BigIntFilter | undefined;
    reference_id?: StringNullableFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    updated?: DateTimeNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    user_id?: StringNullableFilter | undefined;
    shop_id?: StringNullableFilter | undefined;
    mediamanager?: StringNullableFilter | undefined;
}
