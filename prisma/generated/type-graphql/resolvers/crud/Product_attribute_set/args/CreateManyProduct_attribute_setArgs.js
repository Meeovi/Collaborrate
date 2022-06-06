"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateManyInput_1 = require("../../../inputs/Product_attribute_setCreateManyInput");
let CreateManyProduct_attribute_setArgs = class CreateManyProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateManyInput_1.Product_attribute_setCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProduct_attribute_setArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProduct_attribute_setArgs.prototype, "skipDuplicates", void 0);
CreateManyProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProduct_attribute_setArgs);
exports.CreateManyProduct_attribute_setArgs = CreateManyProduct_attribute_setArgs;
