import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneDeepdiveArgs } from "./args/UpsertOneDeepdiveArgs";
import { Deepdive } from "../../../models/Deepdive";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Deepdive)
export class UpsertOneDeepdiveResolver {
  @TypeGraphQL.Mutation(_returns => Deepdive, {
    nullable: false
  })
  async upsertOneDeepdive(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneDeepdiveArgs): Promise<Deepdive> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).deepdive.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
