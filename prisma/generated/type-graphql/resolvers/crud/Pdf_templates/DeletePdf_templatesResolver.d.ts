import { GraphQLResolveInfo } from "graphql";
import { DeletePdf_templatesArgs } from "./args/DeletePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class DeletePdf_templatesResolver {
    deletePdf_templates(ctx: any, info: GraphQLResolveInfo, args: DeletePdf_templatesArgs): Promise<Pdf_templates | null>;
}
