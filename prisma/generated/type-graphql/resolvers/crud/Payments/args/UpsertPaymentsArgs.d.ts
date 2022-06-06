import { PaymentsCreateInput } from "../../../inputs/PaymentsCreateInput";
import { PaymentsUpdateInput } from "../../../inputs/PaymentsUpdateInput";
import { PaymentsWhereUniqueInput } from "../../../inputs/PaymentsWhereUniqueInput";
export declare class UpsertPaymentsArgs {
    where: PaymentsWhereUniqueInput;
    create: PaymentsCreateInput;
    update: PaymentsUpdateInput;
}
