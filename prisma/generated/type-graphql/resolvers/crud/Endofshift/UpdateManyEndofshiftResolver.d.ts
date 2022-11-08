import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEndofshiftArgs } from "./args/UpdateManyEndofshiftArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEndofshiftResolver {
    updateManyEndofshift(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEndofshiftArgs): Promise<AffectedRowsOutput>;
}
