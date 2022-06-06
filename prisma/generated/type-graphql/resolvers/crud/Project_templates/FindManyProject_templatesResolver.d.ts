import { GraphQLResolveInfo } from "graphql";
import { FindManyProject_templatesArgs } from "./args/FindManyProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
export declare class FindManyProject_templatesResolver {
    findManyProject_templates(ctx: any, info: GraphQLResolveInfo, args: FindManyProject_templatesArgs): Promise<Project_templates[]>;
}
