import { GraphQLResolveInfo } from "graphql";
import { CreateManyThemesArgs } from "./args/CreateManyThemesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyThemesResolver {
    createManyThemes(ctx: any, info: GraphQLResolveInfo, args: CreateManyThemesArgs): Promise<AffectedRowsOutput>;
}
