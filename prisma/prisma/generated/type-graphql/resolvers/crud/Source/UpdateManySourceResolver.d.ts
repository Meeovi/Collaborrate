import { GraphQLResolveInfo } from "graphql";
import { UpdateManySourceArgs } from "./args/UpdateManySourceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySourceResolver {
    updateManySource(ctx: any, info: GraphQLResolveInfo, args: UpdateManySourceArgs): Promise<AffectedRowsOutput>;
}
