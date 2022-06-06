import { GraphQLResolveInfo } from "graphql";
import { FindManyEmail_templatesArgs } from "./args/FindManyEmail_templatesArgs";
import { Email_templates } from "../../../models/Email_templates";
export declare class FindManyEmail_templatesResolver {
    findManyEmail_templates(ctx: any, info: GraphQLResolveInfo, args: FindManyEmail_templatesArgs): Promise<Email_templates[]>;
}
