import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneApitokenArgs } from "./args/UpsertOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Apitoken)
export class UpsertOneApitokenResolver {
  @TypeGraphQL.Mutation(_returns => Apitoken, {
    nullable: false
  })
  async upsertOneApitoken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneApitokenArgs): Promise<Apitoken> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apitoken.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
