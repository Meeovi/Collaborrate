"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/ReportsOrderByWithRelationAndSearchRelevanceInput");
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
const ReportsScalarFieldEnum_1 = require("../../../../enums/ReportsScalarFieldEnum");
let FindFirstReportsArgs = class FindFirstReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], FindFirstReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsOrderByWithRelationAndSearchRelevanceInput_1.ReportsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReportsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], FindFirstReportsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReportsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstReportsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsScalarFieldEnum_1.ReportsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstReportsArgs.prototype, "distinct", void 0);
FindFirstReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstReportsArgs);
exports.FindFirstReportsArgs = FindFirstReportsArgs;
