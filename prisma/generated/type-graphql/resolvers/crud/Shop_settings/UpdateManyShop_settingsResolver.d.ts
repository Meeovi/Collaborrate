import { GraphQLResolveInfo } from "graphql";
import { UpdateManyShop_settingsArgs } from "./args/UpdateManyShop_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyShop_settingsResolver {
    updateManyShop_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateManyShop_settingsArgs): Promise<AffectedRowsOutput>;
}
