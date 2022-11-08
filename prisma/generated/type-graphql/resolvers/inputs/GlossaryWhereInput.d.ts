import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class GlossaryWhereInput {
    AND?: GlossaryWhereInput[] | undefined;
    OR?: GlossaryWhereInput[] | undefined;
    NOT?: GlossaryWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    content?: StringNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
}
