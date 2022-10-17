import { BigIntWithAggregatesFilter } from "../inputs/BigIntWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
export declare class EventsScalarWhereWithAggregatesInput {
    AND?: EventsScalarWhereWithAggregatesInput[] | undefined;
    OR?: EventsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EventsScalarWhereWithAggregatesInput[] | undefined;
    id?: BigIntWithAggregatesFilter | undefined;
    created_at?: DateTimeNullableWithAggregatesFilter | undefined;
    name?: StringNullableWithAggregatesFilter | undefined;
    content?: StringNullableWithAggregatesFilter | undefined;
    tickets?: StringNullableWithAggregatesFilter | undefined;
    image?: StringNullableWithAggregatesFilter | undefined;
    start?: StringNullableWithAggregatesFilter | undefined;
    end?: StringNullableWithAggregatesFilter | undefined;
    category?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    state?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    postalcode?: StringNullableWithAggregatesFilter | undefined;
}
