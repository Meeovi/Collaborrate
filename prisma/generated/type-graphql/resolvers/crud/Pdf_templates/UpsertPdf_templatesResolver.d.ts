import { GraphQLResolveInfo } from "graphql";
import { UpsertPdf_templatesArgs } from "./args/UpsertPdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class UpsertPdf_templatesResolver {
    upsertPdf_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertPdf_templatesArgs): Promise<Pdf_templates>;
}
