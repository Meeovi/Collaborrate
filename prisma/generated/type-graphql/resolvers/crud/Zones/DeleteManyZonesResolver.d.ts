import { GraphQLResolveInfo } from "graphql";
import { DeleteManyZonesArgs } from "./args/DeleteManyZonesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyZonesResolver {
    deleteManyZones(ctx: any, info: GraphQLResolveInfo, args: DeleteManyZonesArgs): Promise<AffectedRowsOutput>;
}
