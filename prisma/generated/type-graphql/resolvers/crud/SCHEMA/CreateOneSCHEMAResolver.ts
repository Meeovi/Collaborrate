import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneSCHEMAArgs } from "./args/CreateOneSCHEMAArgs";
import { SCHEMA } from "../../../models/SCHEMA";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SCHEMA)
export class CreateOneSCHEMAResolver {
  @TypeGraphQL.Mutation(_returns => SCHEMA, {
    nullable: false
  })
  async createOneSCHEMA(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSCHEMAArgs): Promise<SCHEMA> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).sCHEMA.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
