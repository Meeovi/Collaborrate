"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCollectionsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsOrderByWithAggregationInput_1 = require("../../../inputs/CollectionsOrderByWithAggregationInput");
const CollectionsScalarWhereWithAggregatesInput_1 = require("../../../inputs/CollectionsScalarWhereWithAggregatesInput");
const CollectionsWhereInput_1 = require("../../../inputs/CollectionsWhereInput");
const CollectionsScalarFieldEnum_1 = require("../../../../enums/CollectionsScalarFieldEnum");
let GroupByCollectionsArgs = class GroupByCollectionsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsWhereInput_1.CollectionsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsWhereInput_1.CollectionsWhereInput)
], GroupByCollectionsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsOrderByWithAggregationInput_1.CollectionsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCollectionsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CollectionsScalarFieldEnum_1.CollectionsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCollectionsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsScalarWhereWithAggregatesInput_1.CollectionsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsScalarWhereWithAggregatesInput_1.CollectionsScalarWhereWithAggregatesInput)
], GroupByCollectionsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCollectionsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCollectionsArgs.prototype, "skip", void 0);
GroupByCollectionsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCollectionsArgs);
exports.GroupByCollectionsArgs = GroupByCollectionsArgs;
