"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByLogInArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LogInOrderByWithAggregationInput_1 = require("../../../inputs/LogInOrderByWithAggregationInput");
const LogInScalarWhereWithAggregatesInput_1 = require("../../../inputs/LogInScalarWhereWithAggregatesInput");
const LogInWhereInput_1 = require("../../../inputs/LogInWhereInput");
const LogInScalarFieldEnum_1 = require("../../../../enums/LogInScalarFieldEnum");
let GroupByLogInArgs = class GroupByLogInArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInWhereInput_1.LogInWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInWhereInput_1.LogInWhereInput)
], GroupByLogInArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInOrderByWithAggregationInput_1.LogInOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLogInArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LogInScalarFieldEnum_1.LogInScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByLogInArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LogInScalarWhereWithAggregatesInput_1.LogInScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LogInScalarWhereWithAggregatesInput_1.LogInScalarWhereWithAggregatesInput)
], GroupByLogInArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLogInArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByLogInArgs.prototype, "skip", void 0);
GroupByLogInArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByLogInArgs);
exports.GroupByLogInArgs = GroupByLogInArgs;
