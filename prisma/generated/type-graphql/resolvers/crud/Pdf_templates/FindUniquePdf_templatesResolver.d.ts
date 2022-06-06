import { GraphQLResolveInfo } from "graphql";
import { FindUniquePdf_templatesArgs } from "./args/FindUniquePdf_templatesArgs";
import { Pdf_templates } from "../../../models/Pdf_templates";
export declare class FindUniquePdf_templatesResolver {
    findUniquePdf_templates(ctx: any, info: GraphQLResolveInfo, args: FindUniquePdf_templatesArgs): Promise<Pdf_templates | null>;
}
