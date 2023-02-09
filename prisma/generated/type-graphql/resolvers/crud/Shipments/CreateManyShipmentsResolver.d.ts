import { GraphQLResolveInfo } from "graphql";
import { CreateManyShipmentsArgs } from "./args/CreateManyShipmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShipmentsResolver {
    createManyShipments(ctx: any, info: GraphQLResolveInfo, args: CreateManyShipmentsArgs): Promise<AffectedRowsOutput>;
}
