import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCredit_memosArgs } from "./args/DeleteManyCredit_memosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCredit_memosResolver {
    deleteManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCredit_memosArgs): Promise<AffectedRowsOutput>;
}
