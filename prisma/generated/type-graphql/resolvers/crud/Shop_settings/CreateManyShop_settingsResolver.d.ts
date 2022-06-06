import { GraphQLResolveInfo } from "graphql";
import { CreateManyShop_settingsArgs } from "./args/CreateManyShop_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyShop_settingsResolver {
    createManyShop_settings(ctx: any, info: GraphQLResolveInfo, args: CreateManyShop_settingsArgs): Promise<AffectedRowsOutput>;
}
