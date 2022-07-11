import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { CreateOneUpload_fileArgs } from "./args/CreateOneUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class CreateOneUpload_fileResolver {
  @TypeGraphQL.Mutation(_returns => Upload_file, {
    nullable: false
  })
  async createOneUpload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneUpload_fileArgs): Promise<Upload_file> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
