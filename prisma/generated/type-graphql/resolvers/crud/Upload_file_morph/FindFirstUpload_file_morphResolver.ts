import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstUpload_file_morphArgs } from "./args/FindFirstUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file_morph)
export class FindFirstUpload_file_morphResolver {
  @TypeGraphQL.Query(_returns => Upload_file_morph, {
    nullable: true
  })
  async findFirstUpload_file_morph(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUpload_file_morphArgs): Promise<Upload_file_morph | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file_morph.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
