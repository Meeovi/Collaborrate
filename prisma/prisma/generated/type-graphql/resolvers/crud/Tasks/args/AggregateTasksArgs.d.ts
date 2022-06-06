import { TasksOrderByWithRelationInput } from "../../../inputs/TasksOrderByWithRelationInput";
import { TasksWhereInput } from "../../../inputs/TasksWhereInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";
export declare class AggregateTasksArgs {
    where?: TasksWhereInput | undefined;
    orderBy?: TasksOrderByWithRelationInput[] | undefined;
    cursor?: TasksWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
