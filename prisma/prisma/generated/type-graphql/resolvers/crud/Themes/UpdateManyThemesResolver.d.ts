import { GraphQLResolveInfo } from "graphql";
import { UpdateManyThemesArgs } from "./args/UpdateManyThemesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyThemesResolver {
    updateManyThemes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyThemesArgs): Promise<AffectedRowsOutput>;
}
