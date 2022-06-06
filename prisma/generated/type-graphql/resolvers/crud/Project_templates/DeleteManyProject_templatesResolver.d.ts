import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProject_templatesArgs } from "./args/DeleteManyProject_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProject_templatesResolver {
    deleteManyProject_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProject_templatesArgs): Promise<AffectedRowsOutput>;
}
