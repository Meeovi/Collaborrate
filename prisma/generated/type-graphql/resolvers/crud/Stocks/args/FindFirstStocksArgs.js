"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksOrderByWithRelationInput_1 = require("../../../inputs/StocksOrderByWithRelationInput");
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
const StocksScalarFieldEnum_1 = require("../../../../enums/StocksScalarFieldEnum");
let FindFirstStocksArgs = class FindFirstStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], FindFirstStocksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksOrderByWithRelationInput_1.StocksOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStocksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], FindFirstStocksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStocksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstStocksArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksScalarFieldEnum_1.StocksScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstStocksArgs.prototype, "distinct", void 0);
FindFirstStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstStocksArgs);
exports.FindFirstStocksArgs = FindFirstStocksArgs;
