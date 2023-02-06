import { GraphQLResolveInfo } from "graphql";
import { DeleteManyShipmentsArgs } from "./args/DeleteManyShipmentsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShipmentsResolver {
    deleteManyShipments(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShipmentsArgs): Promise<AffectedRowsOutput>;
}
