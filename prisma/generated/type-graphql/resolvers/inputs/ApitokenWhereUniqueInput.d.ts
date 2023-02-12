import { ApitokenWhereInput } from "../inputs/ApitokenWhereInput";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ApitokenWhereUniqueInput {
    id?: bigint | undefined;
    name?: string | undefined;
    token?: bigint | undefined;
    AND?: ApitokenWhereInput[] | undefined;
    OR?: ApitokenWhereInput[] | undefined;
    NOT?: ApitokenWhereInput[] | undefined;
    created_at?: DateTimeNullableFilter | undefined;
    token_type?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
}
