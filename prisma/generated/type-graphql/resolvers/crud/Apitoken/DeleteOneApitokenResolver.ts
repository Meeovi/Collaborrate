import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneApitokenArgs } from "./args/DeleteOneApitokenArgs";
import { Apitoken } from "../../../models/Apitoken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Apitoken)
export class DeleteOneApitokenResolver {
  @TypeGraphQL.Mutation(_returns => Apitoken, {
    nullable: true
  })
  async deleteOneApitoken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneApitokenArgs): Promise<Apitoken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).apitoken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
