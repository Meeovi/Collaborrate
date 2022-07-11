import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateApitokenArgs } from "./args/AggregateApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
import { AggregateApitoken } from "../../outputs/AggregateApitoken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Apitoken)
export class AggregateApitokenResolver {
  @TypeGraphQL.Query(_returns => AggregateApitoken, {
    nullable: false
  })
  async aggregateApitoken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateApitokenArgs): Promise<AggregateApitoken> {
    return getPrismaFromContext(ctx).apitoken.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
