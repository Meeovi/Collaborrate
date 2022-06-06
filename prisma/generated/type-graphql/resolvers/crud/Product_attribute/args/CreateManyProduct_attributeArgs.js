"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateManyInput_1 = require("../../../inputs/Product_attributeCreateManyInput");
let CreateManyProduct_attributeArgs = class CreateManyProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateManyInput_1.Product_attributeCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyProduct_attributeArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyProduct_attributeArgs.prototype, "skipDuplicates", void 0);
CreateManyProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyProduct_attributeArgs);
exports.CreateManyProduct_attributeArgs = CreateManyProduct_attributeArgs;
