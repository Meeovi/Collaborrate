"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setUpdateInput_1 = require("../../../inputs/Product_attribute_setUpdateInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let UpdateProduct_attribute_setArgs = class UpdateProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setUpdateInput_1.Product_attribute_setUpdateInput)
], UpdateProduct_attribute_setArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], UpdateProduct_attribute_setArgs.prototype, "where", void 0);
UpdateProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateProduct_attribute_setArgs);
exports.UpdateProduct_attribute_setArgs = UpdateProduct_attribute_setArgs;
