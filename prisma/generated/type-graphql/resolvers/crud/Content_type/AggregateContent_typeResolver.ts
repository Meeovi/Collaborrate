import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateContent_typeArgs } from "./args/AggregateContent_typeArgs";
import { Content_type } from "../../../models/Content_type";
import { AggregateContent_type } from "../../outputs/AggregateContent_type";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content_type)
export class AggregateContent_typeResolver {
  @TypeGraphQL.Query(_returns => AggregateContent_type, {
    nullable: false
  })
  async aggregateContent_type(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContent_typeArgs): Promise<AggregateContent_type> {
    return getPrismaFromContext(ctx).content_type.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
