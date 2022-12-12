"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsUpdateManyMutationInput_1 = require("../../../inputs/BrandsUpdateManyMutationInput");
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
let UpdateManyBrandsArgs = class UpdateManyBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsUpdateManyMutationInput_1.BrandsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsUpdateManyMutationInput_1.BrandsUpdateManyMutationInput)
], UpdateManyBrandsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], UpdateManyBrandsArgs.prototype, "where", void 0);
UpdateManyBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBrandsArgs);
exports.UpdateManyBrandsArgs = UpdateManyBrandsArgs;
