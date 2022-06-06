"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksOrderByWithRelationInput_1 = require("../../../inputs/StocksOrderByWithRelationInput");
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
let AggregateStocksArgs = class AggregateStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], AggregateStocksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksOrderByWithRelationInput_1.StocksOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateStocksArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], AggregateStocksArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStocksArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStocksArgs.prototype, "skip", void 0);
AggregateStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateStocksArgs);
exports.AggregateStocksArgs = AggregateStocksArgs;
