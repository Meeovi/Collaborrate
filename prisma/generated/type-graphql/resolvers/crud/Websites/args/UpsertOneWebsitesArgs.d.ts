import { WebsitesCreateInput } from "../../../inputs/WebsitesCreateInput";
import { WebsitesUpdateInput } from "../../../inputs/WebsitesUpdateInput";
import { WebsitesWhereUniqueInput } from "../../../inputs/WebsitesWhereUniqueInput";
export declare class UpsertOneWebsitesArgs {
    where: WebsitesWhereUniqueInput;
    create: WebsitesCreateInput;
    update: WebsitesUpdateInput;
}
