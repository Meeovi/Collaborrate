"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ShopsSumAggregate = class ShopsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ShopsSumAggregate.prototype, "id", void 0);
ShopsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ShopsSumAggregate", {
        isAbstract: true
    })
], ShopsSumAggregate);
exports.ShopsSumAggregate = ShopsSumAggregate;
