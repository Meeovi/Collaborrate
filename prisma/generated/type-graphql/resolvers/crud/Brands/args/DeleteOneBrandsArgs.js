"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsWhereUniqueInput_1 = require("../../../inputs/BrandsWhereUniqueInput");
let DeleteOneBrandsArgs = class DeleteOneBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereUniqueInput_1.BrandsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandsWhereUniqueInput_1.BrandsWhereUniqueInput)
], DeleteOneBrandsArgs.prototype, "where", void 0);
DeleteOneBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBrandsArgs);
exports.DeleteOneBrandsArgs = DeleteOneBrandsArgs;
