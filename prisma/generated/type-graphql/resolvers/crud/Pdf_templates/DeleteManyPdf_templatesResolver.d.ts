import { GraphQLResolveInfo } from "graphql";
import { DeleteManyPdf_templatesArgs } from "./args/DeleteManyPdf_templatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyPdf_templatesResolver {
    deleteManyPdf_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyPdf_templatesArgs): Promise<AffectedRowsOutput>;
}
