import { AgreementsWhereInput } from "../inputs/AgreementsWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AgreementsWhereUniqueInput {
    id?: bigint | undefined;
    AND?: AgreementsWhereInput[] | undefined;
    OR?: AgreementsWhereInput[] | undefined;
    NOT?: AgreementsWhereInput[] | undefined;
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
