"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsOrderByWithAggregationInput_1 = require("../../../inputs/LeadsOrderByWithAggregationInput");
const LeadsScalarWhereWithAggregatesInput_1 = require("../../../inputs/LeadsScalarWhereWithAggregatesInput");
const LeadsWhereInput_1 = require("../../../inputs/LeadsWhereInput");
const LeadsScalarFieldEnum_1 = require("../../../../enums/LeadsScalarFieldEnum");
let GroupByLeadsArgs = class GroupByLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsWhereInput_1.LeadsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsWhereInput_1.LeadsWhereInput)
], GroupByLeadsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsOrderByWithAggregationInput_1.LeadsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLeadsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LeadsScalarFieldEnum_1.LeadsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLeadsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsScalarWhereWithAggregatesInput_1.LeadsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LeadsScalarWhereWithAggregatesInput_1.LeadsScalarWhereWithAggregatesInput)
], GroupByLeadsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLeadsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLeadsArgs.prototype, "skip", void 0);
GroupByLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLeadsArgs);
exports.GroupByLeadsArgs = GroupByLeadsArgs;
