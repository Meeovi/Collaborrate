import { CustomerCreateInput } from "../../../inputs/CustomerCreateInput";
import { CustomerUpdateInput } from "../../../inputs/CustomerUpdateInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
export declare class UpsertCustomerArgs {
    where: CustomerWhereUniqueInput;
    create: CustomerCreateInput;
    update: CustomerUpdateInput;
}
