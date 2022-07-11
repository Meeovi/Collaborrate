import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneProject_templatesArgs } from "./args/UpsertOneProject_templatesArgs";
import { Project_templates } from "../../../models/Project_templates";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project_templates)
export class UpsertOneProject_templatesResolver {
  @TypeGraphQL.Mutation(_returns => Project_templates, {
    nullable: false
  })
  async upsertOneProject_templates(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneProject_templatesArgs): Promise<Project_templates> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).project_templates.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
