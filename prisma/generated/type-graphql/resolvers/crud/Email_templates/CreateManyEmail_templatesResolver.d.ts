import { GraphQLResolveInfo } from "graphql";
import { CreateManyEmail_templatesArgs } from "./args/CreateManyEmail_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEmail_templatesResolver {
    createManyEmail_templates(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmail_templatesArgs): Promise<AffectedRowsOutput>;
}
