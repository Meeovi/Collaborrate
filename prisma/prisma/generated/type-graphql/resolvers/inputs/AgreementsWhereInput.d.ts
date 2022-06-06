import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AgreementsWhereInput {
    AND?: AgreementsWhereInput[] | undefined;
    OR?: AgreementsWhereInput[] | undefined;
    NOT?: AgreementsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    reference_id?: IntFilter | undefined;
    created?: DateTimeNullableFilter | undefined;
    updated?: DateTimeNullableFilter | undefined;
    content?: StringNullableFilter | undefined;
    name?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    type?: StringNullableFilter | undefined;
    user_id?: IntFilter | undefined;
    shop_id?: IntFilter | undefined;
}
