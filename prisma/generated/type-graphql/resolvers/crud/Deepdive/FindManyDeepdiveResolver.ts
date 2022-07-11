import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyDeepdiveArgs } from "./args/FindManyDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Deepdive)
export class FindManyDeepdiveResolver {
  @TypeGraphQL.Query(_returns => [Deepdive], {
    nullable: false
  })
  async deepdives(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyDeepdiveArgs): Promise<Deepdive[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deepdive.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
