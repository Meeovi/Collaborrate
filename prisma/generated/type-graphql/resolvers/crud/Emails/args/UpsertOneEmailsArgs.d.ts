import { EmailsCreateInput } from "../../../inputs/EmailsCreateInput";
import { EmailsUpdateInput } from "../../../inputs/EmailsUpdateInput";
import { EmailsWhereUniqueInput } from "../../../inputs/EmailsWhereUniqueInput";
export declare class UpsertOneEmailsArgs {
    where: EmailsWhereUniqueInput;
    create: EmailsCreateInput;
    update: EmailsUpdateInput;
}
