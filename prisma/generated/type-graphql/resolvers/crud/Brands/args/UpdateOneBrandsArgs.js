"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsUpdateInput_1 = require("../../../inputs/BrandsUpdateInput");
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
let UpdateOneBrandsArgs = class UpdateOneBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsUpdateInput_1.BrandsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsUpdateInput_1.BrandsUpdateInput)
], UpdateOneBrandsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], UpdateOneBrandsArgs.prototype, "where", void 0);
UpdateOneBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBrandsArgs);
exports.UpdateOneBrandsArgs = UpdateOneBrandsArgs;
