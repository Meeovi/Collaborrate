import { GraphQLResolveInfo } from "graphql";
import { UpsertEmail_templatesArgs } from "./args/UpsertEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class UpsertEmail_templatesResolver {
    upsertEmail_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertEmail_templatesArgs): Promise<Email_templates>;
}
