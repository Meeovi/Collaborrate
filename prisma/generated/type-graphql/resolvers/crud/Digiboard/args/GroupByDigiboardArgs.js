"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDigiboardArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DigiboardOrderByWithAggregationInput_1 = require("../../../inputs/DigiboardOrderByWithAggregationInput");
const DigiboardScalarWhereWithAggregatesInput_1 = require("../../../inputs/DigiboardScalarWhereWithAggregatesInput");
const DigiboardWhereInput_1 = require("../../../inputs/DigiboardWhereInput");
const DigiboardScalarFieldEnum_1 = require("../../../../enums/DigiboardScalarFieldEnum");
let GroupByDigiboardArgs = class GroupByDigiboardArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardWhereInput_1.DigiboardWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardWhereInput_1.DigiboardWhereInput)
], GroupByDigiboardArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardOrderByWithAggregationInput_1.DigiboardOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDigiboardArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DigiboardScalarFieldEnum_1.DigiboardScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDigiboardArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DigiboardScalarWhereWithAggregatesInput_1.DigiboardScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DigiboardScalarWhereWithAggregatesInput_1.DigiboardScalarWhereWithAggregatesInput)
], GroupByDigiboardArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDigiboardArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDigiboardArgs.prototype, "skip", void 0);
GroupByDigiboardArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDigiboardArgs);
exports.GroupByDigiboardArgs = GroupByDigiboardArgs;
