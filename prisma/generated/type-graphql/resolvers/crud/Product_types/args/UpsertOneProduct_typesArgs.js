"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesCreateInput_1 = require("../../../inputs/Product_typesCreateInput");
const Product_typesUpdateInput_1 = require("../../../inputs/Product_typesUpdateInput");
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
let UpsertOneProduct_typesArgs = class UpsertOneProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], UpsertOneProduct_typesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesCreateInput_1.Product_typesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesCreateInput_1.Product_typesCreateInput)
], UpsertOneProduct_typesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesUpdateInput_1.Product_typesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesUpdateInput_1.Product_typesUpdateInput)
], UpsertOneProduct_typesArgs.prototype, "update", void 0);
UpsertOneProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneProduct_typesArgs);
exports.UpsertOneProduct_typesArgs = UpsertOneProduct_typesArgs;
