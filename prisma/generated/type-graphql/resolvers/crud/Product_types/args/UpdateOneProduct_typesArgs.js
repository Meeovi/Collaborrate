"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesUpdateInput_1 = require("../../../inputs/Product_typesUpdateInput");
const Product_typesWhereUniqueInput_1 = require("../../../inputs/Product_typesWhereUniqueInput");
let UpdateOneProduct_typesArgs = class UpdateOneProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesUpdateInput_1.Product_typesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesUpdateInput_1.Product_typesUpdateInput)
], UpdateOneProduct_typesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesWhereUniqueInput_1.Product_typesWhereUniqueInput)
], UpdateOneProduct_typesArgs.prototype, "where", void 0);
UpdateOneProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneProduct_typesArgs);
exports.UpdateOneProduct_typesArgs = UpdateOneProduct_typesArgs;
