import { StatesOrderByWithRelationInput } from "../../../inputs/StatesOrderByWithRelationInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
export declare class AggregateStatesArgs {
    where?: StatesWhereInput | undefined;
    orderBy?: StatesOrderByWithRelationInput[] | undefined;
    cursor?: StatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
