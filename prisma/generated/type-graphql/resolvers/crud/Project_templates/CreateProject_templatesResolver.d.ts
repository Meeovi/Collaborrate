import { GraphQLResolveInfo } from "graphql";
import { CreateProject_templatesArgs } from "./args/CreateProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class CreateProject_templatesResolver {
    createProject_templates(ctx: any, info: GraphQLResolveInfo, args: CreateProject_templatesArgs): Promise<Project_templates>;
}
