import { StatesOrderByWithRelationInput } from "../../../inputs/StatesOrderByWithRelationInput";
import { StatesWhereInput } from "../../../inputs/StatesWhereInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
export declare class FindFirstStatesArgs {
    where?: StatesWhereInput | undefined;
    orderBy?: StatesOrderByWithRelationInput[] | undefined;
    cursor?: StatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "country" | "image" | "trainings"> | undefined;
}
