"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/StocksOrderByWithRelationAndSearchRelevanceInput");
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
const StocksScalarFieldEnum_1 = require("../../../../enums/StocksScalarFieldEnum");
let FindManyStocksArgs = class FindManyStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], FindManyStocksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksOrderByWithRelationAndSearchRelevanceInput_1.StocksOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStocksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], FindManyStocksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStocksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStocksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksScalarFieldEnum_1.StocksScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStocksArgs.prototype, "distinct", void 0);
FindManyStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyStocksArgs);
exports.FindManyStocksArgs = FindManyStocksArgs;
