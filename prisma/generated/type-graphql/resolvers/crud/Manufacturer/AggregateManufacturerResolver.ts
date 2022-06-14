import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateManufacturerArgs } from "./args/AggregateManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { AggregateManufacturer } from "../../outputs/AggregateManufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class AggregateManufacturerResolver {
  @TypeGraphQL.Query(_returns => AggregateManufacturer, {
    nullable: false
  })
  async aggregateManufacturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateManufacturerArgs): Promise<AggregateManufacturer> {
    return getPrismaFromContext(ctx).manufacturer.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
