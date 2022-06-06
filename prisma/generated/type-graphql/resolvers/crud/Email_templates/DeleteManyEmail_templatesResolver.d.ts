import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEmail_templatesArgs } from "./args/DeleteManyEmail_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEmail_templatesResolver {
    deleteManyEmail_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmail_templatesArgs): Promise<AffectedRowsOutput>;
}
