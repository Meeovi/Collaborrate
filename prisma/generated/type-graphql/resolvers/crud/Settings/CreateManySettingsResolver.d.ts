import { GraphQLResolveInfo } from "graphql";
import { CreateManySettingsArgs } from "./args/CreateManySettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySettingsResolver {
    createManySettings(ctx: any, info: GraphQLResolveInfo, args: CreateManySettingsArgs): Promise<AffectedRowsOutput>;
}
