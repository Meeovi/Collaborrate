"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_typesAvgAggregate = class Product_typesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_typesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_typesAvgAggregate.prototype, "prod_id", void 0);
Product_typesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_typesAvgAggregate", {
        isAbstract: true
    })
], Product_typesAvgAggregate);
exports.Product_typesAvgAggregate = Product_typesAvgAggregate;
