import { EventsOrderByWithAggregationInput } from "../../../inputs/EventsOrderByWithAggregationInput";
import { EventsScalarWhereWithAggregatesInput } from "../../../inputs/EventsScalarWhereWithAggregatesInput";
import { EventsWhereInput } from "../../../inputs/EventsWhereInput";
export declare class GroupByEventsArgs {
    where?: EventsWhereInput | undefined;
    orderBy?: EventsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "content" | "tickets" | "image" | "start" | "end" | "category" | "city" | "state" | "country" | "postalcode">;
    having?: EventsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
