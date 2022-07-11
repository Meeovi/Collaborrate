import * as TypeGraphQL from "type-graphql";
import { Checklist } from "../../../models/Checklist";
import { Comments } from "../../../models/Comments";
import { Countries } from "../../../models/Countries";
import { Products } from "../../../models/Products";
import { States } from "../../../models/States";
import { Trainings } from "../../../models/Trainings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trainings)
export class TrainingsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Checklist, {
    nullable: true
  })
  async checklist(@TypeGraphQL.Root() trainings: Trainings, @TypeGraphQL.Ctx() ctx: any): Promise<Checklist | null> {
    return getPrismaFromContext(ctx).trainings.findUnique({
      where: {
        id: trainings.id,
      },
    }).checklist({});
  }

  @TypeGraphQL.FieldResolver(_type => Comments, {
    nullable: true
  })
  async comments(@TypeGraphQL.Root() trainings: Trainings, @TypeGraphQL.Ctx() ctx: any): Promise<Comments | null> {
    return getPrismaFromContext(ctx).trainings.findUnique({
      where: {
        id: trainings.id,
      },
    }).comments({});
  }

  @TypeGraphQL.FieldResolver(_type => Countries, {
    nullable: true
  })
  async countries(@TypeGraphQL.Root() trainings: Trainings, @TypeGraphQL.Ctx() ctx: any): Promise<Countries | null> {
    return getPrismaFromContext(ctx).trainings.findUnique({
      where: {
        id: trainings.id,
      },
    }).countries({});
  }

  @TypeGraphQL.FieldResolver(_type => Products, {
    nullable: true
  })
  async products_productsTotrainings(@TypeGraphQL.Root() trainings: Trainings, @TypeGraphQL.Ctx() ctx: any): Promise<Products | null> {
    return getPrismaFromContext(ctx).trainings.findUnique({
      where: {
        id: trainings.id,
      },
    }).products_productsTotrainings({});
  }

  @TypeGraphQL.FieldResolver(_type => States, {
    nullable: true
  })
  async states(@TypeGraphQL.Root() trainings: Trainings, @TypeGraphQL.Ctx() ctx: any): Promise<States | null> {
    return getPrismaFromContext(ctx).trainings.findUnique({
      where: {
        id: trainings.id,
      },
    }).states({});
  }
}
