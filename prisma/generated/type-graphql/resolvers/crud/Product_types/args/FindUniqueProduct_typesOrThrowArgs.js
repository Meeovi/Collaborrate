"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProduct_typesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
let FindUniqueProduct_typesOrThrowArgs = class FindUniqueProduct_typesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], FindUniqueProduct_typesOrThrowArgs.prototype, "where", void 0);
FindUniqueProduct_typesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueProduct_typesOrThrowArgs);
exports.FindUniqueProduct_typesOrThrowArgs = FindUniqueProduct_typesOrThrowArgs;
