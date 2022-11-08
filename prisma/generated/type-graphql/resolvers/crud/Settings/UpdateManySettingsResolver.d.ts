import { GraphQLResolveInfo } from "graphql";
import { UpdateManySettingsArgs } from "./args/UpdateManySettingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySettingsResolver {
    updateManySettings(ctx: any, info: GraphQLResolveInfo, args: UpdateManySettingsArgs): Promise<AffectedRowsOutput>;
}
