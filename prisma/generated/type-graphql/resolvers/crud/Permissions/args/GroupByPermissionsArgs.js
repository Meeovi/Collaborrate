"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPermissionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PermissionsOrderByWithAggregationInput_1 = require("../../../inputs/PermissionsOrderByWithAggregationInput");
const PermissionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/PermissionsScalarWhereWithAggregatesInput");
const PermissionsWhereInput_1 = require("../../../inputs/PermissionsWhereInput");
const PermissionsScalarFieldEnum_1 = require("../../../../enums/PermissionsScalarFieldEnum");
let GroupByPermissionsArgs = class GroupByPermissionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsWhereInput_1.PermissionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsWhereInput_1.PermissionsWhereInput)
], GroupByPermissionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsOrderByWithAggregationInput_1.PermissionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPermissionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PermissionsScalarFieldEnum_1.PermissionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByPermissionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PermissionsScalarWhereWithAggregatesInput_1.PermissionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PermissionsScalarWhereWithAggregatesInput_1.PermissionsScalarWhereWithAggregatesInput)
], GroupByPermissionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPermissionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByPermissionsArgs.prototype, "skip", void 0);
GroupByPermissionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByPermissionsArgs);
exports.GroupByPermissionsArgs = GroupByPermissionsArgs;
