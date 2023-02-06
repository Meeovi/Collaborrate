import { LogInOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/LogInOrderByWithRelationAndSearchRelevanceInput";
import { LogInWhereInput } from "../../../inputs/LogInWhereInput";
import { LogInWhereUniqueInput } from "../../../inputs/LogInWhereUniqueInput";
export declare class AggregateLogInArgs {
    where?: LogInWhereInput | undefined;
    orderBy?: LogInOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: LogInWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
