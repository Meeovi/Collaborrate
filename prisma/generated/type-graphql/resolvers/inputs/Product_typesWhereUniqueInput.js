"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_typesWhereUniqueInput = class Product_typesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_typesWhereUniqueInput.prototype, "id", void 0);
Product_typesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_typesWhereUniqueInput", {
        isAbstract: true
    })
], Product_typesWhereUniqueInput);
exports.Product_typesWhereUniqueInput = Product_typesWhereUniqueInput;
