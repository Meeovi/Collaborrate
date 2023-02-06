import { GraphQLResolveInfo } from "graphql";
import { UpdateManyZonesArgs } from "./args/UpdateManyZonesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyZonesResolver {
    updateManyZones(ctx: any, info: GraphQLResolveInfo, args: UpdateManyZonesArgs): Promise<AffectedRowsOutput>;
}
