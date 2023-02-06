import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPagesArgs } from "./args/UpdateManyPagesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPagesResolver {
    updateManyPages(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPagesArgs): Promise<AffectedRowsOutput>;
}
