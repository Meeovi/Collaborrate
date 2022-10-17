import { StatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StatesOrderByWithRelationAndSearchRelevanceInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
export declare class AggregateStatesArgs {
    where?: StatesWhereInput | undefined;
    orderBy?: StatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: StatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
