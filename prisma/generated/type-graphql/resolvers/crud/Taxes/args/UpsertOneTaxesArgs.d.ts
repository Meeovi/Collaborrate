import { TaxesCreateInput } from "../../../inputs/TaxesCreateInput";
import { TaxesUpdateInput } from "../../../inputs/TaxesUpdateInput";
import { TaxesWhereUniqueInput } from "../../../inputs/TaxesWhereUniqueInput";
export declare class UpsertOneTaxesArgs {
    where: TaxesWhereUniqueInput;
    create: TaxesCreateInput;
    update: TaxesUpdateInput;
}
