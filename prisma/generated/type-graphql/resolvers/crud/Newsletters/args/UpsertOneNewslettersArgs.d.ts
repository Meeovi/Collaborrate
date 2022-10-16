import { NewslettersCreateInput } from "../../../inputs/NewslettersCreateInput";
import { NewslettersUpdateInput } from "../../../inputs/NewslettersUpdateInput";
import { NewslettersWhereUniqueInput } from "../../../inputs/NewslettersWhereUniqueInput";
export declare class UpsertOneNewslettersArgs {
    where: NewslettersWhereUniqueInput;
    create: NewslettersCreateInput;
    update: NewslettersUpdateInput;
}
