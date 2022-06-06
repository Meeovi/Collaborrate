import { ContractsOrderByWithRelationInput } from "../../../inputs/ContractsOrderByWithRelationInput";
import { ContractsWhereInput } from "../../../inputs/ContractsWhereInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";
export declare class AggregateContractsArgs {
    where?: ContractsWhereInput | undefined;
    orderBy?: ContractsOrderByWithRelationInput[] | undefined;
    cursor?: ContractsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
