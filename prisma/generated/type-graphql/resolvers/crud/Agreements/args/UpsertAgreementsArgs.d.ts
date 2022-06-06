import { AgreementsCreateInput } from "../../../inputs/AgreementsCreateInput";
import { AgreementsUpdateInput } from "../../../inputs/AgreementsUpdateInput";
import { AgreementsWhereUniqueInput } from "../../../inputs/AgreementsWhereUniqueInput";
export declare class UpsertAgreementsArgs {
    where: AgreementsWhereUniqueInput;
    create: AgreementsCreateInput;
    update: AgreementsUpdateInput;
}
