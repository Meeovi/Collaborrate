import { GraphQLResolveInfo } from "graphql";
import { CreateManyPdf_templatesArgs } from "./args/CreateManyPdf_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyPdf_templatesResolver {
    createManyPdf_templates(ctx: any, info: GraphQLResolveInfo, args: CreateManyPdf_templatesArgs): Promise<AffectedRowsOutput>;
}
