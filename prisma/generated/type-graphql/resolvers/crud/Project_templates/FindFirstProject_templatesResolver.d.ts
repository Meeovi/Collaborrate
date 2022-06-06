import { GraphQLResolveInfo } from "graphql";
import { FindFirstProject_templatesArgs } from "./args/FindFirstProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class FindFirstProject_templatesResolver {
    findFirstProject_templates(ctx: any, info: GraphQLResolveInfo, args: FindFirstProject_templatesArgs): Promise<Project_templates | null>;
}
