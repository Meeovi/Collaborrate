"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
let DeleteManyProduct_attribute_setArgs = class DeleteManyProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], DeleteManyProduct_attribute_setArgs.prototype, "where", void 0);
DeleteManyProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProduct_attribute_setArgs);
exports.DeleteManyProduct_attribute_setArgs = DeleteManyProduct_attribute_setArgs;
