import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DigiboardWhereInput {
    AND?: DigiboardWhereInput[] | undefined;
    OR?: DigiboardWhereInput[] | undefined;
    NOT?: DigiboardWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    board?: StringNullableFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    student?: StringNullableFilter | undefined;
    course?: StringNullableFilter | undefined;
}
