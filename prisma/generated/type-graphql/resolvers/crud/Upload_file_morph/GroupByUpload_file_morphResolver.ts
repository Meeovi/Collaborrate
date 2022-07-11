import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByUpload_file_morphArgs } from "./args/GroupByUpload_file_morphArgs";
import { Upload_file_morph } from "../../../models/Upload_file_morph";
import { Upload_file_morphGroupBy } from "../../outputs/Upload_file_morphGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Upload_file_morph)
export class GroupByUpload_file_morphResolver {
  @TypeGraphQL.Query(_returns => [Upload_file_morphGroupBy], {
    nullable: false
  })
  async groupByUpload_file_morph(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUpload_file_morphArgs): Promise<Upload_file_morphGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).upload_file_morph.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
