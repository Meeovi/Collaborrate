import { GraphQLResolveInfo } from "graphql";
import { UpdateManyShipmentsArgs } from "./args/UpdateManyShipmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShipmentsResolver {
    updateManyShipments(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShipmentsArgs): Promise<AffectedRowsOutput>;
}
