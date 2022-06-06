import { GraphQLResolveInfo } from "graphql";
import { CreateManySales_settingsArgs } from "./args/CreateManySales_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySales_settingsResolver {
    createManySales_settings(ctx: any, info: GraphQLResolveInfo, args: CreateManySales_settingsArgs): Promise<AffectedRowsOutput>;
}
