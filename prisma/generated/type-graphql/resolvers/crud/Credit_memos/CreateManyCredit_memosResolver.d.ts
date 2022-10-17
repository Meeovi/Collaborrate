import { GraphQLResolveInfo } from "graphql";
import { CreateManyCredit_memosArgs } from "./args/CreateManyCredit_memosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCredit_memosResolver {
    createManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: CreateManyCredit_memosArgs): Promise<AffectedRowsOutput>;
}
