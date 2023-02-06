import { StatesOrderByWithAggregationInput } from "../../../inputs/StatesOrderByWithAggregationInput";
import { StatesScalarWhereWithAggregatesInput } from "../../../inputs/StatesScalarWhereWithAggregatesInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
export declare class GroupByStatesArgs {
    where?: StatesWhereInput | undefined;
    orderBy?: StatesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "country" | "image" | "trainings">;
    having?: StatesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
