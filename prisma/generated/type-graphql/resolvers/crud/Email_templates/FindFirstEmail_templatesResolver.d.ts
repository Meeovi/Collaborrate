import { GraphQLResolveInfo } from "graphql";
import { FindFirstEmail_templatesArgs } from "./args/FindFirstEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class FindFirstEmail_templatesResolver {
    findFirstEmail_templates(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmail_templatesArgs): Promise<Email_templates | null>;
}
