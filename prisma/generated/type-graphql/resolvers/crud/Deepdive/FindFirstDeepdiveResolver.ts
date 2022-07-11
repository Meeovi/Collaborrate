import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstDeepdiveArgs } from "./args/FindFirstDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Deepdive)
export class FindFirstDeepdiveResolver {
  @TypeGraphQL.Query(_returns => Deepdive, {
    nullable: true
  })
  async findFirstDeepdive(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstDeepdiveArgs): Promise<Deepdive | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deepdive.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
