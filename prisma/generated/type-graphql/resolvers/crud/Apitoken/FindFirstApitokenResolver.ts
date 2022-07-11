import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstApitokenArgs } from "./args/FindFirstApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Apitoken)
export class FindFirstApitokenResolver {
  @TypeGraphQL.Query(_returns => Apitoken, {
    nullable: true
  })
  async findFirstApitoken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstApitokenArgs): Promise<Apitoken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apitoken.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
