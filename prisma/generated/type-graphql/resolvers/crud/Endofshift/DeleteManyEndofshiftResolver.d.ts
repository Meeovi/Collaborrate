import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEndofshiftArgs } from "./args/DeleteManyEndofshiftArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEndofshiftResolver {
    deleteManyEndofshift(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEndofshiftArgs): Promise<AffectedRowsOutput>;
}
