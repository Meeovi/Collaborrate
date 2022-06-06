import { GraphQLResolveInfo } from "graphql";
import { CreateManyGeneral_settingsArgs } from "./args/CreateManyGeneral_settingsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyGeneral_settingsResolver {
    createManyGeneral_settings(ctx: any, info: GraphQLResolveInfo, args: CreateManyGeneral_settingsArgs): Promise<AffectedRowsOutput>;
}
