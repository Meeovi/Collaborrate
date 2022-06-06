import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProject_templatesArgs } from "./args/UpdateManyProject_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProject_templatesResolver {
    updateManyProject_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProject_templatesArgs): Promise<AffectedRowsOutput>;
}
