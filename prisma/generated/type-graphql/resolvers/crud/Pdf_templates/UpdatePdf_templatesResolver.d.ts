import { GraphQLResolveInfo } from "graphql";
import { UpdatePdf_templatesArgs } from "./args/UpdatePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class UpdatePdf_templatesResolver {
    updatePdf_templates(ctx: any, info: GraphQLResolveInfo, args: UpdatePdf_templatesArgs): Promise<Pdf_templates | null>;
}
