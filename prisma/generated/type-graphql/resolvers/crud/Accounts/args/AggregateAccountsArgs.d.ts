import { AccountsOrderByWithRelationInput } from "../../../inputs/AccountsOrderByWithRelationInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
export declare class AggregateAccountsArgs {
    where?: AccountsWhereInput | undefined;
    orderBy?: AccountsOrderByWithRelationInput[] | undefined;
    cursor?: AccountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
