import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUpload_fileArgs } from "./args/DeleteOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class DeleteOneUpload_fileResolver {
  @TypeGraphQL.Mutation(_returns => Upload_file, {
    nullable: true
  })
  async deleteOneUpload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUpload_fileArgs): Promise<Upload_file | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
