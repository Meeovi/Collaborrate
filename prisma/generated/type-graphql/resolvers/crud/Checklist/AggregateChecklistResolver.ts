import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateChecklistArgs } from "./args/AggregateChecklistArgs";
import { Checklist } from "../../../models/Checklist";
import { AggregateChecklist } from "../../outputs/AggregateChecklist";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Checklist)
export class AggregateChecklistResolver {
  @TypeGraphQL.Query(_returns => AggregateChecklist, {
    nullable: false
  })
  async aggregateChecklist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateChecklistArgs): Promise<AggregateChecklist> {
    return getPrismaFromContext(ctx).checklist.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
