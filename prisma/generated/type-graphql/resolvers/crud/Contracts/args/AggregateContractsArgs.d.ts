import { ContractsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ContractsOrderByWithRelationAndSearchRelevanceInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";
export declare class AggregateContractsArgs {
    where?: ContractsWhereInput | undefined;
    orderBy?: ContractsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ContractsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
