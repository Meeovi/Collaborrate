import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTrainingsArgs } from "./args/AggregateTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
import { AggregateTrainings } from "../../outputs/AggregateTrainings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trainings)
export class AggregateTrainingsResolver {
  @TypeGraphQL.Query(_returns => AggregateTrainings, {
    nullable: false
  })
  async aggregateTrainings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrainingsArgs): Promise<AggregateTrainings> {
    return getPrismaFromContext(ctx).trainings.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
