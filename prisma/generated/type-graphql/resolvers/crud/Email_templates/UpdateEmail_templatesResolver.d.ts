import { GraphQLResolveInfo } from "graphql";
import { UpdateEmail_templatesArgs } from "./args/UpdateEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class UpdateEmail_templatesResolver {
    updateEmail_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateEmail_templatesArgs): Promise<Email_templates | null>;
}
