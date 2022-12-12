import { GlossaryOrderByWithAggregationInput } from "../../../inputs/GlossaryOrderByWithAggregationInput";
import { GlossaryScalarWhereWithAggregatesInput } from "../../../inputs/GlossaryScalarWhereWithAggregatesInput";
import { GlossaryWhereInput } from "../../../inputs/GlossaryWhereInput";
export declare class GroupByGlossaryArgs {
    where?: GlossaryWhereInput | undefined;
    orderBy?: GlossaryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "content" | "image" | "published">;
    having?: GlossaryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
