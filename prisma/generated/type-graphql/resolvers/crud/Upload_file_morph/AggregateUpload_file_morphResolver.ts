import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUpload_file_morphArgs } from "./args/AggregateUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { AggregateUpload_file_morph } from "../../outputs/AggregateUpload_file_morph";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file_morph)
export class AggregateUpload_file_morphResolver {
  @TypeGraphQL.Query(_returns => AggregateUpload_file_morph, {
    nullable: false
  })
  async aggregateUpload_file_morph(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUpload_file_morphArgs): Promise<AggregateUpload_file_morph> {
    return getPrismaFromContext(ctx).upload_file_morph.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
