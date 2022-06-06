import { GraphQLResolveInfo } from "graphql";
import { FindManyPdf_templatesArgs } from "./args/FindManyPdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class FindManyPdf_templatesResolver {
    findManyPdf_templates(ctx: any, info: GraphQLResolveInfo, args: FindManyPdf_templatesArgs): Promise<Pdf_templates[]>;
}
