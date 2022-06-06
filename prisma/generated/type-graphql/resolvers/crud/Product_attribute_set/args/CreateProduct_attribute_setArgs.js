"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateInput_1 = require("../../../inputs/Product_attribute_setCreateInput");
let CreateProduct_attribute_setArgs = class CreateProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateInput_1.Product_attribute_setCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateInput_1.Product_attribute_setCreateInput)
], CreateProduct_attribute_setArgs.prototype, "data", void 0);
CreateProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProduct_attribute_setArgs);
exports.CreateProduct_attribute_setArgs = CreateProduct_attribute_setArgs;
