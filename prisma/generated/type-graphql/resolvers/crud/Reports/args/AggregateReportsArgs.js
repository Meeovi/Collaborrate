"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReportsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReportsOrderByWithRelationInput_1 = require("../../../inputs/ReportsOrderByWithRelationInput");
const ReportsWhereInput_1 = require("../../../inputs/ReportsWhereInput");
const ReportsWhereUniqueInput_1 = require("../../../inputs/ReportsWhereUniqueInput");
let AggregateReportsArgs = class AggregateReportsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereInput_1.ReportsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereInput_1.ReportsWhereInput)
], AggregateReportsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReportsOrderByWithRelationInput_1.ReportsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReportsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReportsWhereUniqueInput_1.ReportsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReportsWhereUniqueInput_1.ReportsWhereUniqueInput)
], AggregateReportsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReportsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReportsArgs.prototype, "skip", void 0);
AggregateReportsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReportsArgs);
exports.AggregateReportsArgs = AggregateReportsArgs;
