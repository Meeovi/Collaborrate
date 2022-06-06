import { TasksCreateInput } from "../../../inputs/TasksCreateInput";
import { TasksUpdateInput } from "../../../inputs/TasksUpdateInput";
import { TasksWhereUniqueInput } from "../../../inputs/TasksWhereUniqueInput";
export declare class UpsertTasksArgs {
    where: TasksWhereUniqueInput;
    create: TasksCreateInput;
    update: TasksUpdateInput;
}
