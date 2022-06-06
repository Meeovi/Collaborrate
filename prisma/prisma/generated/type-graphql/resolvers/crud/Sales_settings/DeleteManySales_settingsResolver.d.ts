import { GraphQLResolveInfo } from "graphql";
import { DeleteManySales_settingsArgs } from "./args/DeleteManySales_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySales_settingsResolver {
    deleteManySales_settings(ctx: any, info: GraphQLResolveInfo, args: DeleteManySales_settingsArgs): Promise<AffectedRowsOutput>;
}
