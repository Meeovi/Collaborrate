"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCart_price_rulesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput");
const Cart_price_rulesWhereInput_1 = require("../../../inputs/Cart_price_rulesWhereInput");
const Cart_price_rulesWhereUniqueInput_1 = require("../../../inputs/Cart_price_rulesWhereUniqueInput");
const Cart_price_rulesScalarFieldEnum_1 = require("../../../../enums/Cart_price_rulesScalarFieldEnum");
let FindManyCart_price_rulesArgs = class FindManyCart_price_rulesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereInput_1.Cart_price_rulesWhereInput)
], FindManyCart_price_rulesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput_1.Cart_price_rulesOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCart_price_rulesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Cart_price_rulesWhereUniqueInput_1.Cart_price_rulesWhereUniqueInput)
], FindManyCart_price_rulesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCart_price_rulesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCart_price_rulesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Cart_price_rulesScalarFieldEnum_1.Cart_price_rulesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCart_price_rulesArgs.prototype, "distinct", void 0);
FindManyCart_price_rulesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCart_price_rulesArgs);
exports.FindManyCart_price_rulesArgs = FindManyCart_price_rulesArgs;
