"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
let DeleteOneProduct_typesArgs = class DeleteOneProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], DeleteOneProduct_typesArgs.prototype, "where", void 0);
DeleteOneProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneProduct_typesArgs);
exports.DeleteOneProduct_typesArgs = DeleteOneProduct_typesArgs;
