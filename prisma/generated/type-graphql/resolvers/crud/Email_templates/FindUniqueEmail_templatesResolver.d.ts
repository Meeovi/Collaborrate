import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEmail_templatesArgs } from "./args/FindUniqueEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class FindUniqueEmail_templatesResolver {
    findUniqueEmail_templates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmail_templatesArgs): Promise<Email_templates | null>;
}
