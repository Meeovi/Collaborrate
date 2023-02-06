import { GraphQLResolveInfo } from "graphql";
import { CreateManyZonesArgs } from "./args/CreateManyZonesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyZonesResolver {
    createManyZones(ctx: any, info: GraphQLResolveInfo, args: CreateManyZonesArgs): Promise<AffectedRowsOutput>;
}
