"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesUpdateManyMutationInput_1 = require("../../../inputs/Product_typesUpdateManyMutationInput");
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
let UpdateManyProduct_typesArgs = class UpdateManyProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesUpdateManyMutationInput_1.Product_typesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_typesUpdateManyMutationInput_1.Product_typesUpdateManyMutationInput)
], UpdateManyProduct_typesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], UpdateManyProduct_typesArgs.prototype, "where", void 0);
UpdateManyProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyProduct_typesArgs);
exports.UpdateManyProduct_typesArgs = UpdateManyProduct_typesArgs;
