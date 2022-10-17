import { ApitokenOrderByWithAggregationInput } from "../../../inputs/ApitokenOrderByWithAggregationInput";
import { ApitokenScalarWhereWithAggregatesInput } from "../../../inputs/ApitokenScalarWhereWithAggregatesInput";
import { ApitokenWhereInput } from "../../../inputs/ApitokenWhereInput";
export declare class GroupByApitokenArgs {
    where?: ApitokenWhereInput | undefined;
    orderBy?: ApitokenOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created_at" | "name" | "token_type" | "description" | "token">;
    having?: ApitokenScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
