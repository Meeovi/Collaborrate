import { GraphQLResolveInfo } from "graphql";
import { DeleteProject_templatesArgs } from "./args/DeleteProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class DeleteProject_templatesResolver {
    deleteProject_templates(ctx: any, info: GraphQLResolveInfo, args: DeleteProject_templatesArgs): Promise<Project_templates | null>;
}
