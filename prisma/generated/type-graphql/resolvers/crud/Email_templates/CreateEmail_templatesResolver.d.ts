import { GraphQLResolveInfo } from "graphql";
import { CreateEmail_templatesArgs } from "./args/CreateEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class CreateEmail_templatesResolver {
    createEmail_templates(ctx: any, info: GraphQLResolveInfo, args: CreateEmail_templatesArgs): Promise<Email_templates>;
}
