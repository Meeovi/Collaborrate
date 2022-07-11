import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindUniqueUpload_fileArgs } from "./args/FindUniqueUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class FindUniqueUpload_fileResolver {
  @TypeGraphQL.Query(_returns => Upload_file, {
    nullable: true
  })
  async upload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUpload_fileArgs): Promise<Upload_file | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
