import { LogInOrderByWithRelationInput } from "../../../inputs/LogInOrderByWithRelationInput";
import { LogInWhereInput } from "../../../inputs/LogInWhereInput";
import { LogInWhereUniqueInput } from "../../../inputs/LogInWhereUniqueInput";
export declare class AggregateLogInArgs {
    where?: LogInWhereInput | undefined;
    orderBy?: LogInOrderByWithRelationInput[] | undefined;
    cursor?: LogInWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
