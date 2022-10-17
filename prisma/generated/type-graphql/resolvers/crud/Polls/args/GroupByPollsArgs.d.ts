import { PollsOrderByWithAggregationInput } from "../../../inputs/PollsOrderByWithAggregationInput";
import { PollsScalarWhereWithAggregatesInput } from "../../../inputs/PollsScalarWhereWithAggregatesInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
export declare class GroupByPollsArgs {
    where?: PollsWhereInput | undefined;
    orderBy?: PollsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "question" | "response" | "categories" | "articles" | "products" | "customers" | "users">;
    having?: PollsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
