"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
let DeleteManyProduct_typesArgs = class DeleteManyProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], DeleteManyProduct_typesArgs.prototype, "where", void 0);
DeleteManyProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyProduct_typesArgs);
exports.DeleteManyProduct_typesArgs = DeleteManyProduct_typesArgs;
