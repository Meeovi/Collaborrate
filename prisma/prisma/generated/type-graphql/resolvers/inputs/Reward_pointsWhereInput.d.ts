import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class Reward_pointsWhereInput {
    AND?: Reward_pointsWhereInput[] | undefined;
    OR?: Reward_pointsWhereInput[] | undefined;
    NOT?: Reward_pointsWhereInput[] | undefined;
    id?: IntFilter | undefined;
    name?: StringFilter | undefined;
    excerpt?: StringNullableFilter | undefined;
    discount?: DecimalNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    published?: DateTimeNullableFilter | undefined;
    coupons?: StringNullableFilter | undefined;
    expiration?: DateTimeNullableFilter | undefined;
    categories?: StringNullableFilter | undefined;
    articles?: StringNullableFilter | undefined;
    products?: StringNullableFilter | undefined;
    customers?: StringNullableFilter | undefined;
    users?: StringNullableFilter | undefined;
}
