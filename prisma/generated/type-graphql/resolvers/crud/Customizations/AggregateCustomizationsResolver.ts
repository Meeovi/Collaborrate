import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCustomizationsArgs } from "./args/AggregateCustomizationsArgs";
import { Customizations } from "../../../models/Customizations";
import { AggregateCustomizations } from "../../outputs/AggregateCustomizations";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customizations)
export class AggregateCustomizationsResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomizations, {
    nullable: false
  })
  async aggregateCustomizations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCustomizationsArgs): Promise<AggregateCustomizations> {
    return getPrismaFromContext(ctx).customizations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
