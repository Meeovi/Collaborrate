import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTemplatesArgs } from "./args/DeleteManyTemplatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTemplatesResolver {
    deleteManyTemplates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTemplatesArgs): Promise<AffectedRowsOutput>;
}
