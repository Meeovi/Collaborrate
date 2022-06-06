import { GraphQLResolveInfo } from "graphql";
import { CreateManyProject_templatesArgs } from "./args/CreateManyProject_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProject_templatesResolver {
    createManyProject_templates(ctx: any, info: GraphQLResolveInfo, args: CreateManyProject_templatesArgs): Promise<AffectedRowsOutput>;
}
