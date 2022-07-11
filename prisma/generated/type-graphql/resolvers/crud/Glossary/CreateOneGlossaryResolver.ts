import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneGlossaryArgs } from "./args/CreateOneGlossaryArgs";
import { Glossary } from "../../../models/Glossary";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Glossary)
export class CreateOneGlossaryResolver {
  @TypeGraphQL.Mutation(_returns => Glossary, {
    nullable: false
  })
  async createOneGlossary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneGlossaryArgs): Promise<Glossary> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).glossary.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
