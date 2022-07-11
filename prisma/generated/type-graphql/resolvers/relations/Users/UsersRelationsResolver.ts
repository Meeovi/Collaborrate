import * as TypeGraphQL from "type-graphql";
import { Emails } from "../../../models/Emails";
import { Mediamanager } from "../../../models/Mediamanager";
import { Messages } from "../../../models/Messages";
import { Projects } from "../../../models/Projects";
import { Users } from "../../../models/Users";
import { Workspaces } from "../../../models/Workspaces";
import { UsersEmailsArgs } from "./args/UsersEmailsArgs";
import { UsersMediamanagerArgs } from "./args/UsersMediamanagerArgs";
import { UsersMessagesArgs } from "./args/UsersMessagesArgs";
import { UsersProjectsArgs } from "./args/UsersProjectsArgs";
import { UsersWorkspacesArgs } from "./args/UsersWorkspacesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Emails], {
    nullable: false
  })
  async emails(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersEmailsArgs): Promise<Emails[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).emails(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Mediamanager], {
    nullable: false
  })
  async mediamanager(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersMediamanagerArgs): Promise<Mediamanager[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).mediamanager(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Messages], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersMessagesArgs): Promise<Messages[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).messages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Projects], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersProjectsArgs): Promise<Projects[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).projects(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Workspaces], {
    nullable: false
  })
  async workspaces(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersWorkspacesArgs): Promise<Workspaces[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).workspaces(args);
  }
}
