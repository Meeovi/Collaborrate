import { GraphQLResolveInfo } from "graphql";
import { DeleteEmail_templatesArgs } from "./args/DeleteEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class DeleteEmail_templatesResolver {
    deleteEmail_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteEmail_templatesArgs): Promise<Email_templates | null>;
}
