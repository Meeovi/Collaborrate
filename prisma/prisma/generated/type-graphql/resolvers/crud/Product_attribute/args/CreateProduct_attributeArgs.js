"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateInput_1 = require("../../../inputs/Product_attributeCreateInput");
let CreateProduct_attributeArgs = class CreateProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateInput_1.Product_attributeCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateInput_1.Product_attributeCreateInput)
], CreateProduct_attributeArgs.prototype, "data", void 0);
CreateProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProduct_attributeArgs);
exports.CreateProduct_attributeArgs = CreateProduct_attributeArgs;
