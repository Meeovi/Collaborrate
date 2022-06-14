import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUpload_fileArgs } from "./args/AggregateUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { AggregateUpload_file } from "../../outputs/AggregateUpload_file";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class AggregateUpload_fileResolver {
  @TypeGraphQL.Query(_returns => AggregateUpload_file, {
    nullable: false
  })
  async aggregateUpload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUpload_fileArgs): Promise<AggregateUpload_file> {
    return getPrismaFromContext(ctx).upload_file.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
