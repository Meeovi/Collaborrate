import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSCHEMAArgs } from "./args/FindUniqueSCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class FindUniqueSCHEMAResolver {
  @TypeGraphQL.Query(_returns => SCHEMA, {
    nullable: true
  })
  async sCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
