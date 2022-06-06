import { GraphQLResolveInfo } from "graphql";
import { UpdateManySales_settingsArgs } from "./args/UpdateManySales_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySales_settingsResolver {
    updateManySales_settings(ctx: any, info: GraphQLResolveInfo, args: UpdateManySales_settingsArgs): Promise<AffectedRowsOutput>;
}
