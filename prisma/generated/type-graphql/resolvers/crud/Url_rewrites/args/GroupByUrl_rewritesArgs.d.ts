import { Url_rewritesOrderByWithAggregationInput } from "../../../inputs/Url_rewritesOrderByWithAggregationInput";
import { Url_rewritesScalarWhereWithAggregatesInput } from "../../../inputs/Url_rewritesScalarWhereWithAggregatesInput";
import { Url_rewritesWhereInput } from "../../../inputs/Url_rewritesWhereInput";
export declare class GroupByUrl_rewritesArgs {
    where?: Url_rewritesWhereInput | undefined;
    orderBy?: Url_rewritesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "request_path" | "description" | "redirect_type" | "target_path" | "store">;
    having?: Url_rewritesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
