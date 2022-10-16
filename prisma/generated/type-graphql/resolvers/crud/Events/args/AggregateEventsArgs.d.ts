import { EventsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/EventsOrderByWithRelationAndSearchRelevanceInput";
import { EventsWhereInput } from "../../../inputs/EventsWhereInput";
import { EventsWhereUniqueInput } from "../../../inputs/EventsWhereUniqueInput";
export declare class AggregateEventsArgs {
    where?: EventsWhereInput | undefined;
    orderBy?: EventsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: EventsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
