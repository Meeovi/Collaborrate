import { EventsOrderByWithRelationInput } from "../../../inputs/EventsOrderByWithRelationInput";
import { EventsWhereInput } from "../../../inputs/EventsWhereInput";
import { EventsWhereUniqueInput } from "../../../inputs/EventsWhereUniqueInput";
export declare class FindFirstEventsArgs {
    where?: EventsWhereInput | undefined;
    orderBy?: EventsOrderByWithRelationInput[] | undefined;
    cursor?: EventsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created_at" | "name" | "content" | "tickets" | "image" | "start" | "end" | "category" | "city" | "state" | "country" | "postalcode"> | undefined;
}
