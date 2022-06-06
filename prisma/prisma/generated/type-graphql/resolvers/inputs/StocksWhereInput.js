"use strict";
var StocksWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StocksWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let StocksWhereInput = StocksWhereInput_1 = class StocksWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StocksWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StocksWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StocksWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StocksWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StocksWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], StocksWhereInput.prototype, "enabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StocksWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StocksWhereInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], StocksWhereInput.prototype, "sources", void 0);
StocksWhereInput = StocksWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("StocksWhereInput", {
        isAbstract: true
    })
], StocksWhereInput);
exports.StocksWhereInput = StocksWhereInput;
