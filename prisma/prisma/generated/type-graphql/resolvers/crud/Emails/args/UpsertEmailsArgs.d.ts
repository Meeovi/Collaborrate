import { EmailsCreateInput } from "../../../inputs/EmailsCreateInput";
import { EmailsUpdateInput } from "../../../inputs/EmailsUpdateInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
export declare class UpsertEmailsArgs {
    where: EmailsWhereUniqueInput;
    create: EmailsCreateInput;
    update: EmailsUpdateInput;
}
