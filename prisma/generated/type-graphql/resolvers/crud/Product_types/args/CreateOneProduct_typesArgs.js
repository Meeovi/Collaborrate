"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesCreateInput_1 = require("../../../inputs/Product_typesCreateInput");
let CreateOneProduct_typesArgs = class CreateOneProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesCreateInput_1.Product_typesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesCreateInput_1.Product_typesCreateInput)
], CreateOneProduct_typesArgs.prototype, "data", void 0);
CreateOneProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneProduct_typesArgs);
exports.CreateOneProduct_typesArgs = CreateOneProduct_typesArgs;
