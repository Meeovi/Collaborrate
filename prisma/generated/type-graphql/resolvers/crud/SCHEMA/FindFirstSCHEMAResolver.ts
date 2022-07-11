import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstSCHEMAArgs } from "./args/FindFirstSCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class FindFirstSCHEMAResolver {
  @TypeGraphQL.Query(_returns => SCHEMA, {
    nullable: true
  })
  async findFirstSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSCHEMAArgs): Promise<SCHEMA | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
