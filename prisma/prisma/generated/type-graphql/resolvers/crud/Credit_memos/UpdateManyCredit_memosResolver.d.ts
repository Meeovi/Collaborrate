import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCredit_memosArgs } from "./args/UpdateManyCredit_memosArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCredit_memosResolver {
    updateManyCredit_memos(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCredit_memosArgs): Promise<AffectedRowsOutput>;
}
