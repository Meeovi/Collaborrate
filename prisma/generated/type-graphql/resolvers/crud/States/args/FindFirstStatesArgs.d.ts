import { StatesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/StatesOrderByWithRelationAndSearchRelevanceInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
export declare class FindFirstStatesArgs {
    where?: StatesWhereInput | undefined;
    orderBy?: StatesOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: StatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "country" | "image" | "trainings"> | undefined;
}
