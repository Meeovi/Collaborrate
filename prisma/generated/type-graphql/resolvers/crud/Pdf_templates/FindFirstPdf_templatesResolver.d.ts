import { GraphQLResolveInfo } from "graphql";
import { FindFirstPdf_templatesArgs } from "./args/FindFirstPdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class FindFirstPdf_templatesResolver {
    findFirstPdf_templates(ctx: any, info: GraphQLResolveInfo, args: FindFirstPdf_templatesArgs): Promise<Pdf_templates | null>;
}
