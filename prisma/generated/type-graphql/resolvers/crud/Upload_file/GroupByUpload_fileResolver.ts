import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUpload_fileArgs } from "./args/GroupByUpload_fileArgs";
import { Upload_file } from "../../../models/Upload_file";
import { Upload_fileGroupBy } from "../../outputs/Upload_fileGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file)
export class GroupByUpload_fileResolver {
  @TypeGraphQL.Query(_returns => [Upload_fileGroupBy], {
    nullable: false
  })
  async groupByUpload_file(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUpload_fileArgs): Promise<Upload_fileGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
