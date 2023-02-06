import { GraphQLResolveInfo } from "graphql";
import { DeleteManyThemesArgs } from "./args/DeleteManyThemesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyThemesResolver {
    deleteManyThemes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyThemesArgs): Promise<AffectedRowsOutput>;
}
