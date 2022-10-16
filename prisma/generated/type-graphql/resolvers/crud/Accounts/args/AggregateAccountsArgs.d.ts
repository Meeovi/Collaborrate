import { AccountsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AccountsOrderByWithRelationAndSearchRelevanceInput";
import { AccountsWhereInput } from "../../../inputs/AccountsWhereInput";
import { AccountsWhereUniqueInput } from "../../../inputs/AccountsWhereUniqueInput";
export declare class AggregateAccountsArgs {
    where?: AccountsWhereInput | undefined;
    orderBy?: AccountsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: AccountsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
