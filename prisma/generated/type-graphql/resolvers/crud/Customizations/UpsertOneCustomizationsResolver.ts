import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCustomizationsArgs } from "./args/UpsertOneCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customizations)
export class UpsertOneCustomizationsResolver {
  @TypeGraphQL.Mutation(_returns => Customizations, {
    nullable: false
  })
  async upsertOneCustomizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCustomizationsArgs): Promise<Customizations> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).customizations.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
