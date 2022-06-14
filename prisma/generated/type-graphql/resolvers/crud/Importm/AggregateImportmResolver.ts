import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateImportmArgs } from "./args/AggregateImportmArgs";
import { Importm } from "../../../models/Importm";
import { AggregateImportm } from "../../outputs/AggregateImportm";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Importm)
export class AggregateImportmResolver {
  @TypeGraphQL.Query(_returns => AggregateImportm, {
    nullable: false
  })
  async aggregateImportm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateImportmArgs): Promise<AggregateImportm> {
    return getPrismaFromContext(ctx).importm.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
