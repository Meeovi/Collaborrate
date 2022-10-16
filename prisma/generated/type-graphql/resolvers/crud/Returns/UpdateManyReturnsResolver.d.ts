import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReturnsArgs } from "./args/UpdateManyReturnsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReturnsResolver {
    updateManyReturns(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReturnsArgs): Promise<AffectedRowsOutput>;
}
