import { GraphQLResolveInfo } from "graphql";
import { UpsertProject_templatesArgs } from "./args/UpsertProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class UpsertProject_templatesResolver {
    upsertProject_templates(ctx: any, info: GraphQLResolveInfo, args: UpsertProject_templatesArgs): Promise<Project_templates>;
}
