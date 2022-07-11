import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateThemesArgs } from "./args/AggregateThemesArgs";
import { Themes } from "../../../models/Themes";
import { AggregateThemes } from "../../outputs/AggregateThemes";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Themes)
export class AggregateThemesResolver {
  @TypeGraphQL.Query(_returns => AggregateThemes, {
    nullable: false
  })
  async aggregateThemes(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateThemesArgs): Promise<AggregateThemes> {
    return getPrismaFromContext(ctx).themes.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
