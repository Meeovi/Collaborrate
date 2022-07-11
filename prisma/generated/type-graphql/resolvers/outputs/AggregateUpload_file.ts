import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Upload_fileAvgAggregate } from "../outputs/Upload_fileAvgAggregate";
import { Upload_fileCountAggregate } from "../outputs/Upload_fileCountAggregate";
import { Upload_fileMaxAggregate } from "../outputs/Upload_fileMaxAggregate";
import { Upload_fileMinAggregate } from "../outputs/Upload_fileMinAggregate";
import { Upload_fileSumAggregate } from "../outputs/Upload_fileSumAggregate";

@TypeGraphQL.ObjectType("AggregateUpload_file", {
  isAbstract: true
})
export class AggregateUpload_file {
  @TypeGraphQL.Field(_type => Upload_fileCountAggregate, {
    nullable: true
  })
  _count!: Upload_fileCountAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileAvgAggregate, {
    nullable: true
  })
  _avg!: Upload_fileAvgAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileSumAggregate, {
    nullable: true
  })
  _sum!: Upload_fileSumAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileMinAggregate, {
    nullable: true
  })
  _min!: Upload_fileMinAggregate | null;

  @TypeGraphQL.Field(_type => Upload_fileMaxAggregate, {
    nullable: true
  })
  _max!: Upload_fileMaxAggregate | null;
}
