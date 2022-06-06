import { GraphQLResolveInfo } from "graphql";
import { CreatePdf_templatesArgs } from "./args/CreatePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class CreatePdf_templatesResolver {
    createPdf_templates(ctx: any, info: GraphQLResolveInfo, args: CreatePdf_templatesArgs): Promise<Pdf_templates>;
}
