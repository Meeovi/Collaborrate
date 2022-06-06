"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_set = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_set = class Product_attribute_set {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_set.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_set.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_set.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_set.prototype, "attribute_id", void 0);
Product_attribute_set = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attribute_set", {
        isAbstract: true
    })
], Product_attribute_set);
exports.Product_attribute_set = Product_attribute_set;
