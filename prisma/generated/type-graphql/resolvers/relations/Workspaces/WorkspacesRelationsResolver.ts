import * as TypeGraphQL from "type-graphql";
import { Brands } from "../../../models/Brands";
import { Categories } from "../../../models/Categories";
import { Customers } from "../../../models/Customers";
import { Products } from "../../../models/Products";
import { Projects } from "../../../models/Projects";
import { Shops } from "../../../models/Shops";
import { Tasks } from "../../../models/Tasks";
import { Users } from "../../../models/Users";
import { Workspaces } from "../../../models/Workspaces";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Workspaces)
export class WorkspacesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Brands, {
    nullable: true
  })
  async brands_brandsToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Brands | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).brands_brandsToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Categories, {
    nullable: true
  })
  async categories(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Categories | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).categories({});
  }

  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: true
  })
  async customers_customersToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Customers | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).customers_customersToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products_productsToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).products_productsToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Projects, {
    nullable: true
  })
  async projects_projectsToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Projects | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).projects_projectsToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Shops, {
    nullable: true
  })
  async shops_shopsToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Shops | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).shops_shopsToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Tasks, {
    nullable: true
  })
  async tasks_tasksToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Tasks | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).tasks_tasksToworkspaces({});
  }

  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: true
  })
  async users_usersToworkspaces(@TypeGraphQL.Root() workspaces: Workspaces, @TypeGraphQL.Ctx() ctx: any): Promise<Users | null> {
    return getPrismaFromContext(ctx).workspaces.findUnique({
      where: {
        id: workspaces.id,
      },
    }).users_usersToworkspaces({});
  }
}
