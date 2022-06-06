import { Url_rewritesOrderByWithRelationInput } from "../../../inputs/Url_rewritesOrderByWithRelationInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";
import { Url_rewritesWhereUniqueInput } from "../../../inputs/Url_rewritesWhereUniqueInput";
export declare class FindFirstUrl_rewritesArgs {
    where?: Url_rewritesWhereInput | undefined;
    orderBy?: Url_rewritesOrderByWithRelationInput[] | undefined;
    cursor?: Url_rewritesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "request_path" | "description" | "redirect_type" | "target_path" | "store"> | undefined;
}
