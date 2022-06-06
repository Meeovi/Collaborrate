import { GraphQLResolveInfo } from "graphql";
import { FindUniqueProject_templatesArgs } from "./args/FindUniqueProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class FindUniqueProject_templatesResolver {
    findUniqueProject_templates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProject_templatesArgs): Promise<Project_templates | null>;
}
