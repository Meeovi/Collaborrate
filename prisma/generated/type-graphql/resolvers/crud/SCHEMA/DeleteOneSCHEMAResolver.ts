import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneSCHEMAArgs } from "./args/DeleteOneSCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class DeleteOneSCHEMAResolver {
  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: true
  })
  async deleteOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
