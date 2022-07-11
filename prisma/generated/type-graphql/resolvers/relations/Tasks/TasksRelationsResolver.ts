import * as TypeGraphQL from "type-graphql";
import { Mediamanager } from "../../../models/Mediamanager";
import { Projects } from "../../../models/Projects";
import { Tasks } from "../../../models/Tasks";
import { Workspaces } from "../../../models/Workspaces";
import { TasksMediamanagerArgs } from "./args/TasksMediamanagerArgs";
import { TasksProjectsArgs } from "./args/TasksProjectsArgs";
import { TasksWorkspacesArgs } from "./args/TasksWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tasks)
export class TasksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).mediamanager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Projects], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksProjectsArgs): Promise<Projects[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() tasks: Tasks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TasksWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).tasks.findUnique({
      where: {
        id: tasks.id,
      },
    }).workspaces(args);
  }
}
