import { GraphQLResolveInfo } from "graphql";
import { UpdateProject_templatesArgs } from "./args/UpdateProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class UpdateProject_templatesResolver {
    updateProject_templates(ctx: any, info: GraphQLResolveInfo, args: UpdateProject_templatesArgs): Promise<Project_templates | null>;
}
