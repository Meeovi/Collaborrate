"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSegmentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SegmentsOrderByWithRelationInput_1 = require("../../../inputs/SegmentsOrderByWithRelationInput");
const SegmentsWhereInput_1 = require("../../../inputs/SegmentsWhereInput");
const SegmentsWhereUniqueInput_1 = require("../../../inputs/SegmentsWhereUniqueInput");
let AggregateSegmentsArgs = class AggregateSegmentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereInput_1.SegmentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsWhereInput_1.SegmentsWhereInput)
], AggregateSegmentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SegmentsOrderByWithRelationInput_1.SegmentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateSegmentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SegmentsWhereUniqueInput_1.SegmentsWhereUniqueInput)
], AggregateSegmentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSegmentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateSegmentsArgs.prototype, "skip", void 0);
AggregateSegmentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateSegmentsArgs);
exports.AggregateSegmentsArgs = AggregateSegmentsArgs;
