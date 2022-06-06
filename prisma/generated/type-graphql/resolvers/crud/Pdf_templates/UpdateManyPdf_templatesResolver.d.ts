import { GraphQLResolveInfo } from "graphql";
import { UpdateManyPdf_templatesArgs } from "./args/UpdateManyPdf_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyPdf_templatesResolver {
    updateManyPdf_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyPdf_templatesArgs): Promise<AffectedRowsOutput>;
}
