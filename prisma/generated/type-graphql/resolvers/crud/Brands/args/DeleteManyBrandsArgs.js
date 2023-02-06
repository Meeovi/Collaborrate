"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
let DeleteManyBrandsArgs = class DeleteManyBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], DeleteManyBrandsArgs.prototype, "where", void 0);
DeleteManyBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBrandsArgs);
exports.DeleteManyBrandsArgs = DeleteManyBrandsArgs;
