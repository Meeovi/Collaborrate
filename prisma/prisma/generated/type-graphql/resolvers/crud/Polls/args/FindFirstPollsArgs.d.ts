import { PollsOrderByWithRelationInput } from "../../../inputs/PollsOrderByWithRelationInput";
import { PollsWhereInput } from "../../../inputs/PollsWhereInput";
import { PollsWhereUniqueInput } from "../../../inputs/PollsWhereUniqueInput";
export declare class FindFirstPollsArgs {
    where?: PollsWhereInput | undefined;
    orderBy?: PollsOrderByWithRelationInput[] | undefined;
    cursor?: PollsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "excerpt" | "description" | "image" | "published" | "question" | "response" | "categories" | "articles" | "products" | "customers" | "users"> | undefined;
}
