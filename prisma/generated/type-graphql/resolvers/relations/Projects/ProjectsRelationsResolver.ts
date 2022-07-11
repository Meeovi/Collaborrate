import * as TypeGraphQL from "type-graphql";
import { Customers } from "../../../models/Customers";
import { Projects } from "../../../models/Projects";
import { Tasks } from "../../../models/Tasks";
import { Ticketing } from "../../../models/Ticketing";
import { Users } from "../../../models/Users";
import { Workspaces } from "../../../models/Workspaces";
import { ProjectsWorkspacesArgs } from "./args/ProjectsWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Projects)
export class ProjectsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: true
  })
  async customers(@TypeGraphQL.Root() projects: Projects, @TypeGraphQL.Ctx() ctx: any): Promise<Customers | null> {
    return getPrismaFromContext(ctx).projects.findUnique({
      where: {
        id: projects.id,
      },
    }).customers({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users(@TypeGraphQL.Root() projects: Projects, @TypeGraphQL.Ctx() ctx: any): Promise<Users | null> {
    return getPrismaFromContext(ctx).projects.findUnique({
      where: {
        id: projects.id,
      },
    }).users({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: true
  })
  async tasks(@TypeGraphQL.Root() projects: Projects, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks | null> {
    return getPrismaFromContext(ctx).projects.findUnique({
      where: {
        id: projects.id,
      },
    }).tasks({});
  }

  @TypeGraphQL.FieldResolver(_type => Ticketing, {
    nullable: true
  })
  async ticketing(@TypeGraphQL.Root() projects: Projects, @TypeGraphQL.Ctx() ctx: any): Promise<Ticketing | null> {
    return getPrismaFromContext(ctx).projects.findUnique({
      where: {
        id: projects.id,
      },
    }).ticketing({});
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() projects: Projects, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectsWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).projects.findUnique({
      where: {
        id: projects.id,
      },
    }).workspaces(args);
  }
}
