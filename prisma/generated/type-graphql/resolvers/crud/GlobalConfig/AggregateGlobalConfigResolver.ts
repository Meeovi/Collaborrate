import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateGlobalConfigArgs } from "./args/AggregateGlobalConfigArgs";
import { GlobalConfig } from "../../../models/GlobalConfig";
import { AggregateGlobalConfig } from "../../outputs/AggregateGlobalConfig";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => GlobalConfig)
export class AggregateGlobalConfigResolver {
  @TypeGraphQL.Query(_returns => AggregateGlobalConfig, {
    nullable: false
  })
  async aggregateGlobalConfig(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateGlobalConfigArgs): Promise<AggregateGlobalConfig> {
    return getPrismaFromContext(ctx).globalConfig.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
