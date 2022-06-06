import { ContractsCreateInput } from "../../../inputs/ContractsCreateInput";
import { ContractsUpdateInput } from "../../../inputs/ContractsUpdateInput";
import { ContractsWhereUniqueInput } from "../../../inputs/ContractsWhereUniqueInput";
export declare class UpsertContractsArgs {
    where: ContractsWhereUniqueInput;
    create: ContractsCreateInput;
    update: ContractsUpdateInput;
}
