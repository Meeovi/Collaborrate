"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByWithRelationInput_1 = require("../../../inputs/ReportsOrderByWithRelationInput");
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
const ReportsScalarFieldEnum_1 = require("../../../../enums/ReportsScalarFieldEnum");
let FindManyReportsArgs = class FindManyReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], FindManyReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsOrderByWithRelationInput_1.ReportsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReportsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], FindManyReportsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReportsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReportsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsScalarFieldEnum_1.ReportsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReportsArgs.prototype, "distinct", void 0);
FindManyReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReportsArgs);
exports.FindManyReportsArgs = FindManyReportsArgs;
