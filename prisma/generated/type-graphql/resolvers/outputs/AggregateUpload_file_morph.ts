import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Upload_file_morphAvgAggregate } from "../outputs/Upload_file_morphAvgAggregate";
import { Upload_file_morphCountAggregate } from "../outputs/Upload_file_morphCountAggregate";
import { Upload_file_morphMaxAggregate } from "../outputs/Upload_file_morphMaxAggregate";
import { Upload_file_morphMinAggregate } from "../outputs/Upload_file_morphMinAggregate";
import { Upload_file_morphSumAggregate } from "../outputs/Upload_file_morphSumAggregate";

@TypeGraphQL.ObjectType("AggregateUpload_file_morph", {
  isAbstract: true
})
export class AggregateUpload_file_morph {
  @TypeGraphQL.Field(_type => Upload_file_morphCountAggregate, {
    nullable: true
  })
  _count!: Upload_file_morphCountAggregate | null;

  @TypeGraphQL.Field(_type => Upload_file_morphAvgAggregate, {
    nullable: true
  })
  _avg!: Upload_file_morphAvgAggregate | null;

  @TypeGraphQL.Field(_type => Upload_file_morphSumAggregate, {
    nullable: true
  })
  _sum!: Upload_file_morphSumAggregate | null;

  @TypeGraphQL.Field(_type => Upload_file_morphMinAggregate, {
    nullable: true
  })
  _min!: Upload_file_morphMinAggregate | null;

  @TypeGraphQL.Field(_type => Upload_file_morphMaxAggregate, {
    nullable: true
  })
  _max!: Upload_file_morphMaxAggregate | null;
}
