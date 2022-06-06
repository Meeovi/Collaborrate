"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesOrderByWithRelationInput_1 = require("../../../inputs/Cart_price_rulesOrderByWithRelationInput");
const Cart_price_rulesWhereInput_1 = require("../../../inputs/Cart_price_rulesWhereInput");
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
let AggregateCart_price_rulesArgs = class AggregateCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput)
], AggregateCart_price_rulesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesOrderByWithRelationInput_1.Cart_price_rulesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCart_price_rulesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], AggregateCart_price_rulesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCart_price_rulesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCart_price_rulesArgs.prototype, "skip", void 0);
AggregateCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCart_price_rulesArgs);
exports.AggregateCart_price_rulesArgs = AggregateCart_price_rulesArgs;
