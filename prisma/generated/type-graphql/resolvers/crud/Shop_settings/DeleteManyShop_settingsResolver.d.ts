import { GraphQLResolveInfo } from "graphql";
import { DeleteManyShop_settingsArgs } from "./args/DeleteManyShop_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyShop_settingsResolver {
    deleteManyShop_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteManyShop_settingsArgs): Promise<AffectedRowsOutput>;
}
