"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart_price_rulesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Cart_price_rulesWhereUniqueInput = class Cart_price_rulesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Cart_price_rulesWhereUniqueInput.prototype, "id", void 0);
Cart_price_rulesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Cart_price_rulesWhereUniqueInput", {
        isAbstract: true
    })
], Cart_price_rulesWhereUniqueInput);
exports.Cart_price_rulesWhereUniqueInput = Cart_price_rulesWhereUniqueInput;
