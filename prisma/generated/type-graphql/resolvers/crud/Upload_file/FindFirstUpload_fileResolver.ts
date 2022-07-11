import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstUpload_fileArgs } from "./args/FindFirstUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class FindFirstUpload_fileResolver {
  @TypeGraphQL.Query(_returns => Upload_file, {
    nullable: true
  })
  async findFirstUpload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUpload_fileArgs): Promise<Upload_file | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
