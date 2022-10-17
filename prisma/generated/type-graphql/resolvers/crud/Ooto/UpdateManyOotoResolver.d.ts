import { GraphQLResolveInfo } from "graphql";
import { UpdateManyOotoArgs } from "./args/UpdateManyOotoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyOotoResolver {
    updateManyOoto(ctx: any, info: GraphQLResolveInfo, args: UpdateManyOotoArgs): Promise<AffectedRowsOutput>;
}
