"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setUpdateManyMutationInput_1 = require("../../../inputs/Product_attribute_setUpdateManyMutationInput");
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
let UpdateManyProduct_attribute_setArgs = class UpdateManyProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setUpdateManyMutationInput_1.Product_attribute_setUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setUpdateManyMutationInput_1.Product_attribute_setUpdateManyMutationInput)
], UpdateManyProduct_attribute_setArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], UpdateManyProduct_attribute_setArgs.prototype, "where", void 0);
UpdateManyProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProduct_attribute_setArgs);
exports.UpdateManyProduct_attribute_setArgs = UpdateManyProduct_attribute_setArgs;
