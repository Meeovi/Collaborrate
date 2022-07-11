import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneUpload_file_morphArgs } from "./args/DeleteOneUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file_morph)
export class DeleteOneUpload_file_morphResolver {
  @TypeGraphQL.Mutation(_returns => Upload_file_morph, {
    nullable: true
  })
  async deleteOneUpload_file_morph(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUpload_file_morphArgs): Promise<Upload_file_morph | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file_morph.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
