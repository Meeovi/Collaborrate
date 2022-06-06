import { ImportmOrderByWithAggregationInput } from "../../../inputs/ImportmOrderByWithAggregationInput";
import { ImportmScalarWhereWithAggregatesInput } from "../../../inputs/ImportmScalarWhereWithAggregatesInput";
import { ImportmWhereInput } from "../../../inputs/ImportmWhereInput";
export declare class GroupByImportmArgs {
    where?: ImportmWhereInput | undefined;
    orderBy?: ImportmOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "description" | "file" | "url" | "image">;
    having?: ImportmScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
