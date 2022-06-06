"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
let FindUniqueProduct_attribute_setArgs = class FindUniqueProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], FindUniqueProduct_attribute_setArgs.prototype, "where", void 0);
FindUniqueProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProduct_attribute_setArgs);
exports.FindUniqueProduct_attribute_setArgs = FindUniqueProduct_attribute_setArgs;
