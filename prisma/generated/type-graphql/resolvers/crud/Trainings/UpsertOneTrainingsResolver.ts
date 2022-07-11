import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTrainingsArgs } from "./args/UpsertOneTrainingsArgs";
import { Trainings } from "../../../models/Trainings";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Trainings)
export class UpsertOneTrainingsResolver {
  @TypeGraphQL.Mutation(_returns => Trainings, {
    nullable: false
  })
  async upsertOneTrainings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTrainingsArgs): Promise<Trainings> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).trainings.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
