import { TicketingOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/TicketingOrderByWithRelationAndSearchRelevanceInput";
import { TicketingWhereInput } from "../../../inputs/TicketingWhereInput";
import { TicketingWhereUniqueInput } from "../../../inputs/TicketingWhereUniqueInput";
export declare class AggregateTicketingArgs {
    where?: TicketingWhereInput | undefined;
    orderBy?: TicketingOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: TicketingWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
