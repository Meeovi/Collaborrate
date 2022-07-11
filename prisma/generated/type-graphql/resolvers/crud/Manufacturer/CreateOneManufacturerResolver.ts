import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneManufacturerArgs } from "./args/CreateOneManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class CreateOneManufacturerResolver {
  @TypeGraphQL.Mutation(_returns => Manufacturer, {
    nullable: false
  })
  async createOneManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneManufacturerArgs): Promise<Manufacturer> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
