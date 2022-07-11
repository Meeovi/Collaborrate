import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyManufacturerArgs } from "./args/FindManyManufacturerArgs";
import { Manufacturer } from "../../../models/Manufacturer";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Manufacturer)
export class FindManyManufacturerResolver {
  @TypeGraphQL.Query(_returns => [Manufacturer], {
    nullable: false
  })
  async manufacturers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyManufacturerArgs): Promise<Manufacturer[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).manufacturer.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
