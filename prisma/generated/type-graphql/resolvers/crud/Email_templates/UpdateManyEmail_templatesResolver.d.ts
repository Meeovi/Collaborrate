import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEmail_templatesArgs } from "./args/UpdateManyEmail_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEmail_templatesResolver {
    updateManyEmail_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmail_templatesArgs): Promise<AffectedRowsOutput>;
}
