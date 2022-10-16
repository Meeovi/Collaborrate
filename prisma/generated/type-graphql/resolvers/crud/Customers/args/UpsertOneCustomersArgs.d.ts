import { CustomersCreateInput } from "../../../inputs/CustomersCreateInput";
import { CustomersUpdateInput } from "../../../inputs/CustomersUpdateInput";
import { CustomersWhereUniqueInput } from "../../../inputs/CustomersWhereUniqueInput";
export declare class UpsertOneCustomersArgs {
    where: CustomersWhereUniqueInput;
    create: CustomersCreateInput;
    update: CustomersUpdateInput;
}
