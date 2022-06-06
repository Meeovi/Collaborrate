import { EventsOrderByWithRelationInput } from "../../../inputs/EventsOrderByWithRelationInput";
import { EventsWhereInput } from "../../../inputs/EventsWhereInput";
import { EventsWhereUniqueInput } from "../../../inputs/EventsWhereUniqueInput";
export declare class AggregateEventsArgs {
    where?: EventsWhereInput | undefined;
    orderBy?: EventsOrderByWithRelationInput[] | undefined;
    cursor?: EventsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
