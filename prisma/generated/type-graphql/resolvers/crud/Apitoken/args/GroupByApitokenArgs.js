"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByApitokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ApitokenOrderByWithAggregationInput_1 = require("../../../inputs/ApitokenOrderByWithAggregationInput");
const ApitokenScalarWhereWithAggregatesInput_1 = require("../../../inputs/ApitokenScalarWhereWithAggregatesInput");
const ApitokenWhereInput_1 = require("../../../inputs/ApitokenWhereInput");
const ApitokenScalarFieldEnum_1 = require("../../../../enums/ApitokenScalarFieldEnum");
let GroupByApitokenArgs = class GroupByApitokenArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenWhereInput_1.ApitokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenWhereInput_1.ApitokenWhereInput)
], GroupByApitokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenOrderByWithAggregationInput_1.ApitokenOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByApitokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ApitokenScalarFieldEnum_1.ApitokenScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByApitokenArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ApitokenScalarWhereWithAggregatesInput_1.ApitokenScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ApitokenScalarWhereWithAggregatesInput_1.ApitokenScalarWhereWithAggregatesInput)
], GroupByApitokenArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByApitokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByApitokenArgs.prototype, "skip", void 0);
GroupByApitokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByApitokenArgs);
exports.GroupByApitokenArgs = GroupByApitokenArgs;
